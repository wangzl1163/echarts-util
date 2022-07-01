import {
   SingleSeries,
   SingleSeriesPieType,
   SingleSeriesLineType,
   SingleSeriesBarType,
   SingleSeriesRadarType,
   MultiSeries,
   MultiLineSeries,
   MultiBarSeries
} from './interface'

const formatTitle = (title) => (typeof title === 'string' ? { text: title } : title)

const axisLine = {
   lineStyle: {
      color: '#CCCCCC'
   }
}

const splitLine = {
   lineStyle: {
      type: 'dashed',
      color: '#CCCCCC'
   }
}

// 默认配置
const defaultConfig = {
   config: {
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      title: {
         top: 0,
         left: 0,
         textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 14,
            fontWeight: 400
         }
      },
      textStyle: {
         color: '#333333'
      },
      legend: {
         orient: 'vertical',
         icon: 'rect',
         itemWidth: 8,
         itemHeight: 8,
         top: 0,
         right: 0,
         textStyle: { color: '#666666' }
      }
   },
   seriesItemConfig: {
      label: {
         show: false
      },
      hoverAnimation: false
   }
}

/**
 * 初始化echarts配置
 * 不支持xAxis、yAxis为数组
 * @param {object} option echarts配置项
 */
export const initOption = (option: { config?: any; seriesItemConfig?: any }): void => {
   const { config = {}, seriesItemConfig = {} } = option

   defaultConfig.config = {
      ...defaultConfig.config,
      ...config,
      title: {
         top: 0,
         left: 0,
         ...config.title,
         textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 14,
            fontWeight: 400,
            ...(config.title ? config.title.textStyle : {})
         }
      },
      textStyle: {
         color: '#333333',
         ...config.textStyle
      },
      legend: {
         orient: 'vertical',
         icon: 'rect',
         itemWidth: 8,
         itemHeight: 8,
         top: 0,
         right: 0,
         ...config.legend,
         textStyle: {
            color: '#666666',
            ...(config.legend ? config.legend.textStyle : {})
         }
      }
   }

   defaultConfig.seriesItemConfig = {
      ...defaultConfig.seriesItemConfig,
      ...seriesItemConfig,
      label: {
         show: false,
         ...seriesItemConfig.label
      }
   }
}

/**
 * 创建Echarts的options
 * @param {SingleSeries} singleSeriesOption 单个series的配置
 */
export const createOption = (singleSeriesOptions: SingleSeries): any => {
   const {
      title = '',
      type = '',
      data = [],
      colors = [],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = singleSeriesOptions

   const formattedTitle = formatTitle(title)

   const option = {
      ...defaultConfig.config,
      ...config,
      color: colors.length ? colors : defaultConfig.config.color,
      legend: {
         show: !['line', 'bar'].includes(type),
         ...defaultConfig.config.legend,
         ...config.legend
      },
      tooltip: {
         trigger: 'item',
         show: !['line', 'bar'].includes(type),
         ...defaultConfig.config.tooltip,
         ...config.tooltip
      },
      xAxis: {
         type: 'category',
         show: ['line', 'bar'].includes(type),
         ...defaultConfig.config.xAxis,
         ...config.xAxis,
         axisLine: {
            ...axisLine,
            ...(defaultConfig.config.xAxis ? defaultConfig.config.xAxis.axisLine : {}),
            ...(config.xAxis ? config.xAxis.axisLine : {})
         }
      },
      yAxis: {
         type: 'value',
         ...defaultConfig.config.yAxis,
         ...config.yAxis,
         splitLine: {
            ...splitLine,
            ...(defaultConfig.config.yAxis ? defaultConfig.config.yAxis.splitLine : {}),
            ...(config.yAxis ? config.yAxis.splitLine : {})
         },
         axisLine: {
            show: ['line', 'bar'].includes(type),
            ...axisLine,
            ...(defaultConfig.config.yAxis ? defaultConfig.config.yAxis.axisLine : {}),
            ...(config.yAxis ? config.yAxis.axisLine : {})
         }
      },
      title: {
         ...defaultConfig.config.title,
         ...formattedTitle
      },
      textStyle: {
         ...defaultConfig.config.textStyle,
         ...(config.textStyle || {})
      },
      series: [
         {
            type: type,
            data: data,
            ...defaultConfig.seriesItemConfig,
            ...seriesItemConfig
         }
      ]
   }

   return option
}

/**
 * 创建Echarts饼状图options，默认为环状饼图
 * @param {SingleSeriesPieType} pieOptions 饼图的配置
 */
export const createPieOption = (pieOptions: SingleSeriesPieType): any => {
   const {
      title = '',
      data = [],
      colors = [],
      radius = ['0', '75%'],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = pieOptions

   const seriesItemOption = {
      radius,
      ...seriesItemConfig
   }

   // 图例
   const legend = {
      icon: 'rect',
      itemWidth: 8,
      itemHeight: 8,
      top: 0,
      right: 0,
      textStyle: { color: '#666666' },
      ...(config.legend || {})
   }

   return createOption({
      type: 'pie',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: {
            ...config,
            legend
         },
         seriesItemConfig: seriesItemOption
      }
   })
}

/**
 * 创建Echarts折线图options，默认为不带阴影面积的折线图
 * @param {SingleSeriesLineType} lineOptions 折线图的配置
 */
export const createLineOption = (lineOptions: SingleSeriesLineType): any => {
   const { title = '', data = [], colors = [], extraConfig: { config = {}, seriesItemConfig = {} } = {} } = lineOptions

   const option = {
      ...config,
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function (params) {
            const timeStr = params[0].value[0]
            const valueStr = params
               .map((param) => param.marker + param.seriesName + '：' + param.value[1])
               .join('<br/>')

            return `${timeStr}<br/>${valueStr}`
         },
         ...config.tooltip
      },
      grid: {
         top: 50,
         left: 0,
         right: 25,
         bottom: 0,
         containLabel: true,
         ...(config.grid || {})
      },
      xAxis: {
         // type: 'category',
         boundaryGap: false,
         axisLine,
         splitLine: {
            show: false,
            ...splitLine
         },
         ...(config.xAxis || {})
      },
      yAxis: {
         // type: 'value',
         splitLine,
         ...(config.yAxis || {}),
         axisLine: {
            show: true,
            ...axisLine,
            ...(config.yAxis && config.yAxis.axisLine ? config.yAxis.axisLine : {})
         }
      }
   }

   return createOption({
      type: 'line',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: option,
         seriesItemConfig: {
            symbol: 'none',
            ...seriesItemConfig
         }
      }
   })
}

/**
 * 创建Echarts柱状图options
 * @param {SingleSeriesBarType} barOptions 柱状图的配置
 */
export const createBarOption = (barOptions: SingleSeriesBarType): any => {
   const { title = '', data = [], colors = [], extraConfig: { config = {}, seriesItemConfig = {} } = {} } = barOptions

   const option = {
      ...config,
      grid: {
         top: 28,
         left: 0,
         right: 0,
         bottom: 0,
         containLabel: true,
         ...(config.grid || {})
      },
      xAxis: {
         // type: 'category',
         axisLine,
         splitLine: {
            show: false,
            ...splitLine
         },
         ...(config.xAxis || {})
      },
      yAxis: {
         // type: 'value',
         boundaryGap: false,
         splitLine,
         ...(config.yAxis || {}),
         axisLine: {
            show: true,
            ...axisLine,
            ...(config.yAxis && config.yAxis.axisLine ? config.yAxis.axisLine : {})
         }
      }
   }

   return createOption({
      type: 'bar',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: option,
         seriesItemConfig
      }
   })
}

/**
 * 创建Echarts雷达图options
 * @param radarOptions 雷达图的配置
 */
export const createRadarOption = (radarOptions: SingleSeriesRadarType): any => {
   const {
      title = '',
      legend = [],
      indicator = [],
      data = [],
      colors = [],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = radarOptions

   const option = {
      ...config,
      legend: {
         data: legend,
         ...(config.legend || {})
      },
      radar: {
         splitLine: {
            ...splitLine,
            ...(config.radar && config.radar.splitLine)
         },
         axisLine: {
            ...(config.radar && config.radar.axisLine),
            lineStyle: {
               type: 'dashed',
               ...axisLine.lineStyle,
               ...(config.radar && config.radar.axisLine && config.radar.axisLine.lineStyle)
            }
         },
         indicator
      }
   }

   return createOption({
      type: 'radar',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: option,
         seriesItemConfig
      }
   })
}

/**
 * 创建Echarts图中具有多个series的options
 * @param multiSeriesOption 多个series的配置
 */
export const createMultiOption = (multiSeriesOption: MultiSeries): any => {
   const {
      title = '',
      type = '',
      data = [],
      colors = [],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = multiSeriesOption

   const formattedTitle = formatTitle(title)
   const getAxis = (axisType) => {
      const axisConfig = {
         axisLine: {
            show: true,
            ...axisLine
         },
         splitLine: {
            show: axisType === 'value',
            ...splitLine
         }
      }

      if (axisType === 'category') {
         // 类型为bar时刻度只是作为分隔线，标签和数据点都会在两个刻度之间的带(band)中间。
         axisConfig.boundaryGap = ['bar'].includes(type)
      }

      return axisConfig
   }

   const option = {
      ...defaultConfig.config,
      ...config,
      title: {
         ...defaultConfig.config.title,
         ...formattedTitle
      },
      textStyle: {
         ...defaultConfig.config.textStyle,
         ...(config.textStyle || {})
      },
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function (params) {
            const dimensionNames = params[0].dimensionNames.filter((dn) => !dn.includes('__'))
            if (dimensionNames.toString() === 'x,y') {
               const categoryStr = params[0].axisDim === 'x' ? params[0].value[0] : params[0].value[1]
               const valueStr = params
                  .map(
                     (param) =>
                        param.marker +
                        param.seriesName +
                        '：' +
                        (param.axisDim === 'x' ? param.value[1] : param.value[0])
                  )
                  .join('<br/>')

               return `${categoryStr}<br/>${valueStr}`
            }

            return params
         },
         ...defaultConfig.config.tooltip,
         ...(config.tooltip || {})
      },
      legend: {
         show: data.length > 1, // 多于1个系列展示图例
         type: data.length > 5 ? 'scroll' : 'plain', // 图例数量多余5个时使用滚动图例
         width: data.length > 5 ? '60%' : 'auto',
         ...defaultConfig.config.legend,
         orient: 'horizontal',
         ...(config.legend || {})
      },
      grid: Array.isArray(config.grid)
         ? config.grid.map((item) => ({
              top: title || data.length > 1 ? 40 : 16, // 有标题或多于1个系列时top为40
              left: 0,
              right: 10,
              bottom: 0,
              containLabel: true,
              ...defaultConfig.config.grid,
              ...item
           }))
         : {
              top: title || data.length > 1 ? 40 : 16, // 有标题或多于1个系列时top为40
              left: 0,
              right: 10,
              bottom: 0,
              containLabel: true,
              ...defaultConfig.config.grid,
              ...(config.grid || {})
           },
      xAxis: Array.isArray(config.xAxis)
         ? config.xAxis.map((item) => ({ ...getAxis(item.type || 'category'), ...item }))
         : {
              type: 'category',
              ...getAxis((config.xAxis || {}).type || 'category'),
              ...defaultConfig.config.xAxis,
              ...(config.xAxis || {}),
              axisLine: {
                 ...getAxis((config.xAxis || {}).type || 'category').axisLine,
                 ...(defaultConfig.config.xAxis ? defaultConfig.config.xAxis.axisLine : {}),
                 ...(config.xAxis ? config.xAxis.axisLine : {})
              },
              splitLine: {
                 ...getAxis((config.xAxis || {}).type || 'category').splitLine,
                 ...(defaultConfig.config.xAxis ? defaultConfig.config.xAxis.splitLine : {}),
                 ...(config.xAxis ? config.xAxis.splitLine : {})
              }
           },
      yAxis: Array.isArray(config.yAxis)
         ? config.yAxis.map((item) => ({ ...getAxis(item.type || 'value'), ...item }))
         : {
              type: 'value',
              ...getAxis((config.yAxis || {}).type || 'value'),
              ...defaultConfig.config.yAxis,
              ...(config.yAxis || {}),
              axisLine: {
                 ...getAxis((config.yAxis || {}).type || 'category').axisLine,
                 ...(defaultConfig.config.yAxis ? defaultConfig.config.yAxis.axisLine : {}),
                 ...(config.yAxis ? config.yAxis.axisLine : {})
              },
              splitLine: {
                 ...getAxis((config.yAxis || {}).type || 'category').splitLine,
                 ...(defaultConfig.config.yAxis ? defaultConfig.config.yAxis.splitLine : {}),
                 ...(config.yAxis ? config.yAxis.splitLine : {})
              }
           }
   }
   const handledSeries = data.map((item) => {
      const itemConfig =
         typeof seriesItemConfig === 'function'
            ? {
                 ...defaultConfig.seriesItemConfig,
                 ...seriesItemConfig(item)
              }
            : {
                 ...defaultConfig.seriesItemConfig,
                 ...seriesItemConfig
              }

      return {
         name: item.name,
         type: item.type || type,
         label: {
            show: false
         },
         hoverAnimation: false,
         ...itemConfig,
         data: item.data
      }
   })

   return {
      ...option,
      color: colors.length ? colors : defaultConfig.config.color,
      series: handledSeries
   }
}

/**
 * 创建具有多个series的折线图的options
 * @param multiLineOption 多条折线的配置
 */
export const createMultiLineOption = (multiLineOption: MultiLineSeries) => {
   const {
      title = '',
      data = [],
      colors = [],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = multiLineOption

   return createMultiOption({
      type: 'line',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: config,
         seriesItemConfig:
            typeof seriesItemConfig === 'function'
               ? seriesItemConfig
               : {
                    symbol: 'none',
                    ...seriesItemConfig
                 }
      }
   })
}

/**
 * 创建具有多个series的柱状图的options
 * @param multiBarOptions 多个柱状图的配置
 */
export const createMultiBarOption = (multiBarOptions: MultiBarSeries) => {
   const {
      title = '',
      data = [],
      colors = [],
      extraConfig: { config = {}, seriesItemConfig = {} } = {}
   } = multiBarOptions

   return createMultiOption({
      type: 'bar',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: config,
         seriesItemConfig: seriesItemConfig
      }
   })
}
