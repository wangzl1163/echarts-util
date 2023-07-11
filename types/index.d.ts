declare interface DefaultConfig {
   config: {
      color: string[];
      title: Record<string, string | number | Record<string, string | number>>;
      textStyle: Record<string, string>;
      legend: Record<string, string | number | Record<string, string | number>>;
      tooltip?: Record<string, string | number>;
      xAxis?: Record<string, string | number | boolean> & { splitLine: Record<string, string | number | boolean>; axisLine: Record<string, string | number | boolean>; };
      yAxis?: Record<string, string | number | boolean> & { splitLine: Record<string, string | number | boolean>; axisLine: Record<string, string | number | boolean>; };
      grid?: Record<string, string | number>;
   },
   seriesItemConfig: {
      label: { show: boolean; },
      hoverAnimation: boolean;
   }
}

/**
 * echarts的更丰富的配置
 * @param {any} config 全局的配置
 * @param {any} seriesItemConfig 系列配置
 */
declare interface ExtraConfig {
   config: any
   seriesItemConfig: any
}

/**
 * data类型接口
 */
declare interface SingleSeriesItemData {
   name: string
   value: number
}

/**
 * 指定某个类型的单个系列的配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series数据
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeriesType {
   title?: string | any
   data: any[]
   colors: string[]
   extraConfig?: ExtraConfig
}

/**
 * 单个系列的配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {string} type series类型
 * @param {Array} data series数据，值格式：[[[x], [y], [其他维度的值], ...], ...]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeries {
   title?: string | any
   type: string
   data: any[]
   colors: string[]
   extraConfig?: ExtraConfig
}

/**
 * 饼状图配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series数据
 * @param {Array} colors series颜色
 * @param {Array} radius 饼状图半径 ['内半径', '外半径']
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeriesPieType extends SingleSeriesType {
   data: SingleSeriesItemData[]
   radius: string[]
}

/**
 * 折线图配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series数据，值格式：[[[x], [y], [其他维度的值], ...], ...]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeriesLineType extends SingleSeriesType { }

/**
 * 柱状图配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series数据，值格式：[[[x], [y], [其他维度的值], ...], ...]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeriesBarType extends SingleSeriesType { }

/**
 * 雷达图series data类型接口
 */
declare interface RadarSeriesItemData {
   name: string
   value: number[]
}

/**
 * 雷达图配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} legend 图例的项
 * @param {Array} indicator 雷达图的指示器，值格式：[{name:''},...]
 * @param {Array} data series数据，值格式：[[[x], [y], [其他维度的值], ...], ...]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface SingleSeriesRadarType extends SingleSeriesType {
   legend: string[]
   indicator: { name: string }[]
   data: RadarSeriesItemData[]
}

/**
 * 多个series的项
 * @param {string} type 系列类型
 * @param {string} name 系列名称，用于tooltip的显示，legend 的图例筛选
 * @param {Array} data series项，值格式：[「x」, 「y」, 「其他维度的值」, ...]
 */
declare interface MultiSeriesItem {
   type?: string
   name: string
   data: any[]
}

/**
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series项，值格式：[
 *    {
 *       name: '',
 *       data: [[「x」,「y」,「其他维度的值」,...], ...]
 *    }
 * ]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface MultiSeriesType {
   title?: string | any
   data: MultiSeriesItem[]
   colors: string[]
   extraConfig?: ExtraConfig
}

/**
 * 多个series的配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {string} type series类型，不在data中指定type时起作用，若data中指定了type，则会被替代
 * @param {Array} data series项，值格式：[
 *    {
 *       name: '',
 *       type: '', // 可配置或不配置
 *       data: [[「x」,「y」,「其他维度的值」,...], ...]
 *    }
 * ]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface MultiSeries extends MultiSeriesType {
   type: string
}

/**
 * 多个折线的series的配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series项，值格式：[
 *    {
 *       name: '',
 *       data: [[「x」,「y」,「其他维度的值」,...], ...]
 *    }
 * ]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface MultiLineSeries extends MultiSeriesType { }

/**
 * 多个柱状图的series的配置
 * @param {string|any} title 标题组件，包含主标题和副标题。
 * @param {Array} data series项，值格式：[
 *    {
 *       name: '',
 *       data: [[「x」,「y」,「其他维度的值」,...], ...]
 *    }
 * ]
 * @param {Array} colors series颜色
 * @param {ExtraConfig} extraConfig echarts支持的其他配置
 */
declare interface MultiBarSeries extends MultiSeriesType { }
