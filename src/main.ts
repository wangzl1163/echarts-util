import { SingleSeries, SingleSeriesPieType, SingleSeriesLineType, SingleSeriesBarType, SingleSeriesRadarType, MultiSeries, MultiLineSeries, MultiBarSeries } from './interface';

const formatTitle = (title) => typeof title === 'string' ? { text: title } : title

const axisLine = {
   lineStyle: {
      color: '#CCCCCC'
   }
}

const splitLine = {
   lineStyle: {
      color: '#CCCCCC'
   }
}

// 默认配置
const defaultConfig = {
   config: {
      color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
      title: {
         left: 40,
         textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 14,
            fontWeight: 400
         }
      },
      textStyle: {
         color: '#333333'
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
 * 创建Echarts的options
 * @param {SingleSeries} singleSeriesOption 单个series的配置
 */
export const createOption = (singleSeriesOptions: SingleSeries): any => {
   const {
      title = '',
      type = '',
      data = [],
      colors = [],
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = singleSeriesOptions

   const formattedTitle = formatTitle(title)

   const option = {
      ...config,
      color: colors.length ? colors : defaultConfig.config.color,
      xAxis: {
         type: 'category',
         ...config.xAxis
      },
      yAxis: {
         type: 'value',
         ...config.yAxis
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
      radius = ['75%', '100%'],
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = pieOptions

   const seriesItemOption = {
      radius,
      ...seriesItemConfig
   }

   // 图例
   const legend = {
      icon: 'react',
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
         seriesItemOption
      }
   })
}

/**
 * 创建Echarts折线图options，默认为不带阴影面积的折线图
 * @param {SingleSeriesLineType} lineOptions 折线图的配置
 */
export const createLineOption = (lineOptions: SingleSeriesLineType): any => {
   const {
      title = '',
      data = [],
      colors = [],
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = lineOptions

   const option = {
      ...config,
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function(params) {
            const timeStr = params[0].value[0]
            const valueStr = params.map(param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>')
  
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
         type: 'time',
         boundaryGap: false,
         axisLine,
         splitLine: {
            show: false,
            lineStyle: {
               type: 'dashed',
               ...splitLine.lineStyle
            }
         },
         ...(config.xAxis || {})
      },
      yAxis: {
         type: 'value',
         axisLine: {
            show: false,
            ...axisLine
         },
         splitLine,
         ...(config.yAxis || {})
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
   const {
      title = '',
      data = [],
      colors = [],
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = barOptions

   const axisLine = {
      lineStyle: {
         color: '#979797'
      }
   }
   const splitLine = {
      lineStyle: {
         color: '#EDEDED',
         type: 'dashed'
      }
   }
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
         type: 'category',
         axisLine,
         splitLine: {
            show: false,
            ...splitLine
         },
         ...(config.xAxis || {})
      },
      yAxis: {
         type: 'value',
         boundaryGap: false,
         axisLine: {
            show: true,
            ...axisLine
         },
         splitLine,
         ...(config.yAxis || {})
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
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = radarOptions

   const option = {
      ...config,
      legend: {
         data: legend,
         ...(config.legend || {})
      },
      radar: {
         axisLine: {
            lineStyle: {
               type: 'dashed',
               ...axisLine.lineStyle
            }
         },
         splitLine,
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
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = multiSeriesOption

   const formattedTitle = formatTitle(title)
   const xAxis = {
      axisLine,
      splitLine: {
         show: false,
         lineStyle: {
            type: 'dashed',
            ...splitLine.lineStyle
         }
      }
   }
   const yAxis = {
      boundaryGap: false,
      axisLine: {
         show: true,
         ...axisLine
      },
      splitLine
   }
   const option = {
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
         formatter: function(params) {
            const timeStr = params[0].value[0]
            const valueStr = params.map(param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>')
  
            return `${timeStr}<br/>${valueStr}`
         },
         ...(config.tooltip || {})
      },
      legend: {
         icon: 'react',
         itemWidth: 8,
         itemHeight: 8,
         top: 0,
         right: 0,
         textStyle: { color: '#666666' },
         ...(config.legend || {})
      },
      xAxis: Array.isArray(config.xAxis)
         ? config.xAxis.map(item => ({ ...xAxis, ...item }))
         : {
            type: 'category',
            ...xAxis,
            ...(config.xAxis || {})
         },
      yAxis: Array.isArray(config.yAxis)
         ? config.yAxis.map(item => ({ ...yAxis, ...item }))
         : {
            type: 'value',
            ...yAxis,
            ...(config.yAxis || {})
         },
      grid: {
         top: 28,
         left: 0,
         right: 0,
         bottom: 0,
         containLabel: true,
         ...(config.grid || {})
      }
   }
   const handledSeries = data.map(item => {
      const itemConfig = typeof seriesItemConfig === 'function'
         ? seriesItemConfig(item)
         : seriesItemConfig
  
      return {
         name: item.name,
         type: item.type || type,
         label: {
            show: false
         },
         hoverAnimation: false,
         data: item.data,
         ...itemConfig
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
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = multiLineOption

   return createMultiOption({
      type: 'line',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: config,
         seriesItemConfig: {
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
      extraConfig: {
         config = {},
         seriesItemConfig = {}
      } = {}
   } = multiBarOptions

   return createMultiOption({
      type: 'bar',
      title: title,
      data: data,
      colors: colors,
      extraConfig: {
         config: config,
         seriesItemConfig: {
            symbol: 'none',
            ...seriesItemConfig
         }
      }
   })
}
