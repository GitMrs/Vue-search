let my_header= {
	data(){
		return {
			isShow:false,
			val:"",
			detail:"添加",
			tips:true,
			checked:[],
			person:[],
		}
},
	template:`<header @mouseleave="laeve">
				<div class="wrap">
				<input type="text" placeholder="请输入您要搜索的内容"  v-model="val" @focus="change" @keyup="world" @blur="blur">
				<a class='icon iconfont icon-sousuo'></a>
				<span v-if="isShow" @click="search">{{detail}}</span>
				<b class='icon iconfont icon-guanbi' v-if="isShow" @click="clear"></b>
				</div>
			</header>`,
	methods:{
		change(){
			this.isShow = true
			this.detail = "添加"
		},
		clear(){
			this.val=""
			this.isShow = false
			this.person=[]
			eventBus.$emit("tips",this.person)
			
		},
		blur(){
//			this.isShow = !this.isShow
//			this.isShow = false
		},
		search(){
			if(this.val==""){
				alert("请选择正确的添加内容")
			}else{
				eventBus.$emit("tip",this.tips)
				this.detail = "完成",
				eventBus.$emit("checkeds",this.checked)
			}
			
		},
		world(){
			this.person = [];
			for(var i in this.data){
				if(this.data[i].name.includes(this.val)){
					this.person.push(this.data[i])
				}
			}
			if(this.val==""){
				this.person = []
				this.isShow = false
			}else{
				this.isShow = true
			}
			eventBus.$emit("tips",this.person)
		},
		laeve(){
//			this.isShow = false
		}
		
	},
	created(){
		axios.get("./server/data.json").then((data)=>{
			this.data = data.data
		})
	},
	mounted(){
		eventBus.$on("checked",(data)=>{
				 	this.checked = data
				 })
	}
	
}
