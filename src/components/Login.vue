<template>
    <el-row class="content">
        <el-col :xs="24" :sm="{span:6,offset:9}">
            <span class="title">欢迎登录</span>
            <el-row>
                <el-input v-model="account" placeholder="账号" type="text"></el-input>
                <el-input v-model="password" placeholder="密码" type="password" @keyup.enter.native="loginTodo"></el-input>
                <!-- 增加一个click方法 loginToDo -->
                <el-button type="primary" @click="loginTodo">登录</el-button>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>



export default {
    data() {
        return {
            account: '',
            password: ''
        };
    },
    methods: {
        //设置cookie
        setCookie: function(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            console.info(cname + "=" + cvalue + "; " + expires);
            document.cookie = cname + "=" + cvalue + "; " + expires;
            document.cookie.setCookie()
            console.info(document.cookie);
        },
        //获取cookie
        getCookie: function(cname) {
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        loginTodo() {
            //   this.$router.push('todolist')

            let obj = {
                username: this.account,
                password: this.password
            };
            this.$http.post('http://www.xiaocanghai.com/login/auth', obj) // 将信息发送给后端
                .then((res) => {
                    if (res.data.code === 200) {
                        // 使用sessionStorage将token存储
                         document.cookie = 'jwtToken' + "=" + res.data.data + "; httpOnly";
                        sessionStorage.setItem('demo-token', res.data.token);
                        this.$message({
                            type: 'success',
                            message: '登录成功!'
                        });
                        sessionStorage.setItem('login-status','true');
                        this.$router.push('/todolist') // 登录成功，进入todolist
                    } else {
                        // 登录失败
                        this.$message.error(res.data.info);
                        sessionStorage.setItem('demo-token', null); // 清空token
                    }
                }, (err) => {
                    this.$message.error("请求错误");
                    sessionStorage.setItem('demo-token', null); // 清空token
                }
                )
        }
    }
};
</script>

<style lang="stylus" scoped>
.el-row.conent
    padding 16px
.titile
    font-size 28px
.el-input
    margin 12px 0
.el-button
    width 100%
    margin-top 12px
</style>
