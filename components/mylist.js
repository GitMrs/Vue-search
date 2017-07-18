let my_list = {
	data(){
		return {
			data:{},
			tips:false,
			stateData:"暂无数据",
			checked:[]
		}
	},
	template:`<div class="main">
			<ul>
				<li v-for="i in data">
					<span @click='change(i)'><i :class={checked:i.state}></i></span>
					<span>{{i.name}}</span>
					<span>{{i.dept_name}}</span>
				</li>
				<li>{{stateData}}</li>
			</ul>
	</div>`,
	methods:{
		change(i){
			i.state = !i.state
			this.checked = []
			this.data.forEach((i)=>{
				if(i.state){
					this.checked.push(i)
				}
			})
			eventBus.$emit("checked",this.checked)
		}
	},
	mounted(){
		eventBus.$on("tips",(data)=>{
			this.data = data
			if(this.data.length==0){
				this.stateData="暂无数据"
			}else{
				this.stateData="添加数据"
			}
		})
	},
	watch:{
		data:function(a,b){
//			this.data = data
//			console.log(b)
		}
	}
			
}
