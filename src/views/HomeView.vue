<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <!-- 左侧菜单 -->
                <el-menu router active-text-color="#409eff" background-color="#304156" class="el-menu-vertical-demo"
                    :default-active="$route.path" text-color="#bfcbd9">
                    <logo></logo>
                    <!-- el-menu-item表示只有一级菜单 -->
                    <el-menu-item index="/index">
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>
                    <el-menu-item index="/">
                        <el-icon>
                            <HomeFilled />
                        </el-icon>
                        <span>首页</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <!-- 页面内容 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import logo from '../components/logo.vue'
export default {
    name: 'HomeView',
    components: {
        logo
    },
}
</script>
<style>
body {
    margin: 0;
}

.el-menu-vertical-demo {
    /* vh表示视口高度 */
    height: 100vh;
}
</style>