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
export const createOption = (singleSeriesOptions: SingleSeries = {
   title: '',
   type: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
   const title = formatTitle(singleSeriesOptions.title)
   const config = {
      ...singleSeriesOptions.extraConfig.config,
      title: {
         ...defaultConfig.config.title,
         ...title
      },
      textStyle: {
         ...defaultConfig.config.textStyle,
         ...(singleSeriesOptions.extraConfig.config.textStyle || {})
      },
      color: singleSeriesOptions.colors,
      series: [
         {
            type: singleSeriesOptions.type,
            data: singleSeriesOptions.data,
            ...defaultConfig.seriesItemConfig,
            ...singleSeriesOptions.extraConfig.seriesItemConfig
         }
      ]
   }

   return config
}

/**
 * 创建Echarts饼状图options，默认为环状饼图
 * @param {SingleSeriesPieType} pieOptions 饼图的配置
 */
export const createPieOption = (pieOptions: SingleSeriesPieType = {
   title: '',
   data: [],
   colors: [],
   radius: ['75%', '100%'],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
   const seriesItemConfig = {
      radius: pieOptions.radius,
      ...pieOptions.extraConfig.seriesItemConfig
   }

   // 图例
   const legend = {
      icon: 'react',
      itemWidth: 8,
      itemHeight: 8,
      top: 0,
      right: 0,
      textStyle: { color: '#666666' },
      ...(pieOptions.extraConfig.config.legend || {})
   }

   return createOption({
      type: 'pie',
      title: pieOptions.title,
      data: pieOptions.data,
      colors: pieOptions.colors,
      extraConfig: {
         config: {
            ...pieOptions.extraConfig.config,
            legend
         },
         seriesItemConfig
      }
   })
}

/**
 * 创建Echarts折线图options，默认为不带阴影面积的折线图
 * @param {SingleSeriesLineType} lineOptions 折线图的配置
 */
export const createLineOption = (lineOptions: SingleSeriesLineType = {
   title: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
   const config = {
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function(params) {
            const timeStr = params[0].value[0]
            const valueStr = params.map(param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>')
  
            return `${timeStr}<br/>${valueStr}`
         }
      },
      ...lineOptions.extraConfig.config,
      grid: {
         top: 50,
         left: 0,
         right: 25,
         bottom: 0,
         containLabel: true,
         ...(lineOptions.extraConfig.config.grid || {})
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
         ...(lineOptions.extraConfig.config.xAxis || {})
      },
      yAxis: {
         type: 'value',
         axisLine: {
            show: false,
            ...axisLine
         },
         splitLine,
         ...(lineOptions.extraConfig.config.yAxis || {})
      }
   }

   return createOption({
      type: 'line',
      title: lineOptions.title,
      data: lineOptions.data,
      colors: lineOptions.colors,
      extraConfig: {
         config,
         seriesItemConfig: {
            symbol: 'none',
            ...lineOptions.extraConfig.seriesItemConfig
         }
      }
   })
}

/**
 * 创建Echarts柱状图options
 * @param {SingleSeriesBarType} barOptions 柱状图的配置
 */
export const createBarOption = (barOptions: SingleSeriesBarType = {
   title: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
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
   const config = {
      ...barOptions.extraConfig.config,
      grid: {
         top: 28,
         left: 0,
         right: 0,
         bottom: 0,
         containLabel: true,
         ...(barOptions.extraConfig.config.grid || {})
      },
      xAxis: {
         type: 'category',
         axisLine,
         splitLine: {
            show: false,
            ...splitLine
         },
         ...(barOptions.extraConfig.config.xAxis || {})
      },
      yAxis: {
         type: 'value',
         boundaryGap: false,
         axisLine: {
            show: true,
            ...axisLine
         },
         splitLine,
         ...(barOptions.extraConfig.config.yAxis || {})
      }
   }

   return createOption({
      type: 'bar',
      title: barOptions.title,
      data: barOptions.data,
      colors: barOptions.colors,
      extraConfig: {
         config,
         seriesItemConfig: barOptions.extraConfig.seriesItemConfig
      }
   })
}

/**
 * 创建Echarts雷达图options
 * @param radarOptions 雷达图的配置
 */
export const createRadarOption = (radarOptions: SingleSeriesRadarType = {
   title: '',
   legends: [],
   indicator: [],
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
   const config = {
      ...radarOptions.extraConfig.config,
      legend: {
         data: radarOptions.legends,
         ...(radarOptions.extraConfig.config.legend || {})
      },
      radar: {
         axisLine: {
            lineStyle: {
               type: 'dashed',
               ...axisLine.lineStyle
            }
         },
         splitLine,
         indicator: radarOptions.indicator
      }
   }

   return createOption({
      type: 'radar',
      title: radarOptions.title,
      data: radarOptions.data,
      colors: radarOptions.colors,
      extraConfig: {
         config,
         seriesItemConfig: radarOptions.extraConfig.seriesItemConfig
      }
   })
}

/**
 * 创建Echarts图中具有多个series的options
 * @param multiSeriesOption 多个series的配置
 */
export const createMultiOption = (multiSeriesOption: MultiSeries = {
   title: '',
   type: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}): any => {
   const title = formatTitle(multiSeriesOption.title)
   const xAxis = {
      axisLine,
      splitLine: {
         show: false,
         lineStyle: {
            type: 'dashed',
            ...splitLine.lineStyle
         }
      },
      ...(multiSeriesOption.extraConfig.config.xAxis || {})
   }
   const yAxis = {
      boundaryGap: false,
      axisLine: {
         show: true,
         ...axisLine
      },
      splitLine,
      ...(multiSeriesOption.extraConfig.config.yAxis || {})
   }
   const config = {
      ...multiSeriesOption.extraConfig.config,
      title: {
         ...defaultConfig.config.title,
         ...(multiSeriesOption.extraConfig.config.title || {}),
         ...title
      },
      textStyle: {
         ...defaultConfig.config.textStyle,
         ...(multiSeriesOption.extraConfig.config.textStyle || {})
      },
      tooltip: {
         show: true,
         trigger: 'axis',
         formatter: function(params) {
            const timeStr = params[0].value[0]
            const valueStr = params.map(param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>')
  
            return `${timeStr}<br/>${valueStr}`
         },
         ...(multiSeriesOption.extraConfig.config.tooltip || {})
      },
      legend: {
         icon: 'react',
         itemWidth: 8,
         itemHeight: 8,
         top: 0,
         right: 0,
         textStyle: { color: '#666666' },
         ...(multiSeriesOption.extraConfig.config.legend || {})
      },
      xAxis: Array.isArray(multiSeriesOption.extraConfig.config.xAxis)
         ? multiSeriesOption.extraConfig.config.xAxis.map(item => ({ ...item, ...xAxis }))
         : {
            type: 'category',
            ...xAxis
         },
      yAxis: Array.isArray(multiSeriesOption.extraConfig.config.yAxis)
         ? multiSeriesOption.extraConfig.config.yAxis.map(item => ({ ...item, ...yAxis }))
         : {
            type: 'value',
            ...yAxis
         },
      grid: {
         top: 28,
         left: 0,
         right: 0,
         bottom: 0,
         containLabel: true,
         ...(multiSeriesOption.extraConfig.config.grid || {})
      }
   }
   const handledSeries = multiSeriesOption.data.map(item => {
      const itemConfig = typeof multiSeriesOption.extraConfig.seriesItemConfig === 'function' ? multiSeriesOption.extraConfig.seriesItemConfig(item) || {} : multiSeriesOption.extraConfig.seriesItemConfig
  
      return {
         name: item.name,
         type: item.type || multiSeriesOption.type,
         label: {
            show: false
         },
         hoverAnimation: false,
         data: item.data,
         ...itemConfig
      }
   })
  
   return {
      ...config,
      color: multiSeriesOption.colors,
      series: handledSeries
   }
}

/**
 * 创建具有多个series的折线图的options
 * @param multiLineOption 多条折线的配置
 */
export const createMultiLineOption = (multiLineOption: MultiLineSeries = {
   title: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}) => {
   return createMultiOption({
      type: 'line',
      title: multiLineOption.title,
      data: multiLineOption.data,
      colors: multiLineOption.colors,
      extraConfig: {
         config: multiLineOption.extraConfig.config,
         seriesItemConfig: {
            symbol: 'none',
            ...multiLineOption.extraConfig.seriesItemConfig
         }
      }
   })
}

/**
 * 创建具有多个series的柱状图的options
 * @param multiBarOptions 多个柱状图的配置
 */
export const createMultiBarOption = (multiBarOptions: MultiBarSeries = {
   title: '',
   data: [],
   colors: [],
   extraConfig: {
      config: {},
      seriesItemConfig: {}
   }
}) => {
   return createMultiOption({
      type: 'bar',
      title: multiBarOptions.title,
      data: multiBarOptions.data,
      colors: multiBarOptions.colors,
      extraConfig: {
         config: multiBarOptions.extraConfig.config,
         seriesItemConfig: {
            symbol: 'none',
            ...multiBarOptions.extraConfig.seriesItemConfig
         }
      }
   })
}
