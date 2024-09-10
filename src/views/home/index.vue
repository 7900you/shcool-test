<template>
    <div class="container">
        <el-row type="flex" justify="space-around" align="content-center" class="row-bg">
            <el-col :span="8">
                <div class="grid-content bg-purple title_left">{{ newTime }}</div>
                
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple title-center">实验室资源使用一览</div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" class="row-bg">
            <el-col :span="6">
                <div class="grid-content bg-purple">Ss</div>
            </el-col>
            <el-col :span="6">
                <div class="background"></div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">ss</div>
            </el-col>
        </el-row>
        <el-row type="flex" justify="space-around" class="row-bg">
            <el-col :span="6">
                <div class="grid-content bg-purple">ss</div>
            </el-col>
            <el-col :span="6">
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple">ss</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>

export default {
    data() {
        return {
            newTime: ""
        }
    },
    mounted() {
        this.getNowTime();//进入页面调用该方法获取当前时间
        clearInterval(myTimeDisplay);//销毁之前定时器
        var myTimeDisplay = setInterval(() => {
            this.getNowTime(); //每秒更新一次时间
        }, 1000);
    },
    methods: {
        getNowTime() {
            var date = new Date();
            this.addZero(date.getMinutes())
            this.addZero(date.getSeconds())
            var time = date.getFullYear() + ' - ' + (date.getMonth() + 1) + 
            ' - ' + date.getDate() + ' ' + this.addZero(date.getHours()) + ' : ' + this.addZero(date.getMinutes()) +
             ' : ' + this.addZero(date.getSeconds());
            this.newTime = time;
        },
        //根据自己的需求，看要不要在时间不大于10的时候在前面补0，如果需要直接this.addZero(date.getMinutes()),其它与之相同，如果不需要删掉addZero（）方法即可。
        //小于10的拼接上0字符串
        addZero(s) {

            return s < 10 ? ('0' + s) : s;
        },
    },

}
</script>
<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/u7.png'), url('@/assets/u5.jpg');
    background-repeat: no-repeat;
    /* 设置图片不重复 */
    background-size: cover;
    /* 图片填充整个容器 */
    background-position: center;
    /* 图片居中显示 */
}

.background {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/u29.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: spin 5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.el-row {

    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    height: 30vh;
    border-radius: 4px;
}

.bg-purple-dark {}

.bg-purple {
    /* background: #1962b5; */
    color: #fff;
    font-family: "微软雅黑 Bold", 微软雅黑, 微软雅黑, sans-serif;

}

.bg-purple-light {}

.grid-content {
    /* line-height: 2; */
    /* text-align: left; */
    /* border-radius: 4px; */
    /* min-height: 36px; */
}

.row-bg {
    /* background-color: aqua; */
    padding: 0px 20px 0 10px;

}

.title_left {
    word-spacing: 6px;
    text-align: left;
}

.title-center {
    font-weight: 700;
    font-size: 26px;
    line-height: 18px;
    text-align: center;
}
</style>