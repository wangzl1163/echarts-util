/// <reference types="./index" />
/**
 * 初始化echarts配置
 * 注意：grid 等部分配置项在此配置不起作用
 *      不支持xAxis、yAxis为数组
 * @param {object} option echarts配置项
 */
export declare const initOption: (option: {
    config?: any;
    seriesItemConfig?: any;
}) => void;
/**
 * 创建Echarts的options
 * @param {SingleSeries} singleSeriesOption 单个series的配置
 */
export declare const createOption: (singleSeriesOptions: SingleSeries) => any;
/**
 * 创建Echarts饼状图options，默认为环状饼图
 * @param {SingleSeriesPieType} pieOptions 饼图的配置
 */
export declare const createPieOption: (pieOptions: SingleSeriesPieType) => any;
/**
 * 创建Echarts折线图options，默认为不带阴影面积的折线图
 * @param {SingleSeriesLineType} lineOptions 折线图的配置
 */
export declare const createLineOption: (lineOptions: SingleSeriesLineType) => any;
/**
 * 创建Echarts柱状图options
 * @param {SingleSeriesBarType} barOptions 柱状图的配置
 */
export declare const createBarOption: (barOptions: SingleSeriesBarType) => any;
/**
 * 创建Echarts雷达图options
 * @param radarOptions 雷达图的配置
 */
export declare const createRadarOption: (radarOptions: SingleSeriesRadarType) => any;
/**
 * 创建Echarts图中具有多个series的options
 * @param multiSeriesOption 多个series的配置
 */
export declare const createMultiOption: (multiSeriesOption: MultiSeries) => any;
/**
 * 创建具有多个series的折线图的options
 * @param multiLineOption 多条折线的配置
 */
export declare const createMultiLineOption: (multiLineOption: MultiLineSeries) => any;
/**
 * 创建具有多个series的柱状图的options
 * @param multiBarOptions 多个柱状图的配置
 */
export declare const createMultiBarOption: (multiBarOptions: MultiBarSeries) => any;
export default class Option {
    private readonly axisLine;
    private readonly splitLine;
    private formatTitle;
    private defaultConfig;
    /**
     * 初始化echarts配置
     * 注意：grid 等部分配置项在此配置不起作用
     *      不支持xAxis、yAxis为数组
     * @param {object} option echarts配置项
     */
    initOption(option: {
        config?: any;
        seriesItemConfig?: any;
    }): void;
    /**
     * 创建Echarts的options
     * @param {SingleSeries} singleSeriesOption 单个series的配置
     */
    createOption(singleSeriesOptions: SingleSeries): any;
    /**
     * 创建Echarts饼状图options，默认为环状饼图
     * @param {SingleSeriesPieType} pieOptions 饼图的配置
     */
    createPieOption(pieOptions: SingleSeriesPieType): any;
    /**
     * 创建Echarts折线图options，默认为不带阴影面积的折线图
     * @param {SingleSeriesLineType} lineOptions 折线图的配置
     */
    createLineOption(lineOptions: SingleSeriesLineType): any;
    /**
     * 创建Echarts柱状图options
     * @param {SingleSeriesBarType} barOptions 柱状图的配置
     */
    createBarOption(barOptions: SingleSeriesBarType): any;
    /**
     * 创建Echarts雷达图options
     * @param radarOptions 雷达图的配置
     */
    createRadarOption(radarOptions: SingleSeriesRadarType): any;
    /**
     * 创建Echarts图中具有多个series的options
     * @param multiSeriesOption 多个series的配置
     */
    createMultiOption(multiSeriesOption: MultiSeries): any;
    /**
     * 创建具有多个series的折线图的options
     * @param multiLineOption 多条折线的配置
     */
    createMultiLineOption(multiLineOption: MultiLineSeries): any;
    /**
     * 创建具有多个series的柱状图的options
     * @param multiBarOptions 多个柱状图的配置
     */
    createMultiBarOption(multiBarOptions: MultiBarSeries): any;
}
