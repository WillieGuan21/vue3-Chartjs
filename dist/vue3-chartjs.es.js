var e=Object.assign;import{defineComponent as t,ref as r,onMounted as a,h as n}from"vue";import s from"chart.js";const p=["beforeInit","afterInit","beforeUpdate","afterUpdate","beforeLayout","afterLayout","beforeDatasetsUpdate","afterDatasetsUpdate","beforeDatasetUpdate","afterDatasetUpdate","beforeRender","afterRender","beforeDraw","afterDraw","beforeDatasetsDraw","afterDatasetsDraw","beforeDatasetDraw","afterDatasetDraw","beforeEvent","afterEvent","resize","destroy"];const o=t({name:"Vue3ChartJs",props:{type:{type:String,required:!0},data:{type:Object,required:!0},options:{type:Object,default:()=>({})},plugins:{type:Array,default:()=>[]}},emits:p,setup(t,{emit:n}){const o=r(null),u={chart:null,plugins:[p.reduce(((t,r)=>{const a=function(e,t=null){return{type:e,chartRef:t,preventDefault(){this._defaultPrevented=!0},isDefaultPrevented(){return!this._defaultPrevented},_defaultPrevented:!1}}(r,o);return e(e({},t),function(e,t){return{[t.type]:()=>(e(t.type,t),t.isDefaultPrevented())}}(n,a))}),{id:"Vue3ChartJsEventHookPlugin"}),...t.plugins],props:e({},t)},f=()=>u.chart?u.chart.update():u.chart=new s(o.value.getContext("2d"),{type:u.props.type,data:u.props.data,options:u.props.options,plugins:u.plugins});return a((()=>f())),{chartJSState:u,chartRef:o,render:f,resize:()=>u.chart&&u.chart.resize(),update:()=>{u.props=e(e({},u.props),t),u.chart.update()},destroy:()=>{u.chart&&(u.chart.destroy(),u.chart=null)}}},render:()=>n("canvas",{ref:"chartRef"})});o.install=e=>{e.component(o.name,o)};export default o;
