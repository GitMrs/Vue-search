let tips = {
	data(){
		return {
			"isShow":false
		}
	},
	template:`
			<div class='tip'>
				<transition>
					<p v-if="isShow">添加成功</p>
				</transition>
			</div>
	`,
	mounted(){
		eventBus.$on("tip",(data)=>{
			this.isShow = data
			setTimeout(()=>{
				this.isShow = false 
				
			},3000)
		})
	}
}
