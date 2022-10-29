<template>
  <el-row class="min-h-screen bg-indigo-500">
    <el-col
      :lg="16"
      :md="12"
      :sm="8"
      class="flex justify-center items-center flex-col"
    >
      <h1 class="text-5xl text-light-300 mb-4">欢迎光临</h1>
      <div class="text-3xl text-light-300">饿了吗ui的实战</div>
    </el-col>

    <el-col
      :lg="8"
      :md="12"
      :sm="16"
      class="bg-light-300 flex justify-center items-center flex-col"
    >
      <h1>欢迎回来</h1>
      <span>账号密码登录</span>
      <span></span>

      <el-form ref="refForm" class="w-[250px]" :model="form" :rules="rules">
        <el-form-item prop="name">
          <el-input
            class="w-50 m-2"
            v-model="form.name"
            placeholder="请输入用户名"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>

        <el-form-item prop="pwd">
          <el-input
            type="password"
            show-password
            class="w-50 m-2"
            v-model="form.pwd"
            placeholder="请输入用密码"
          >
            <template #prefix>
              <el-icon class="el-input__icon"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
      </el-form>

      <el-form-item>
        <el-button class="w-[250px] rounded-lg" type="primary" @click="submit"
          >登录</el-button
        >
      </el-form-item>
    </el-col>
  </el-row>
</template>
<script setup>
import { ElNotification } from 'element-plus'
import { Calendar, Lock, User } from "@element-plus/icons-vue";
import { getdata } from "../api/manager";
import { reactive, ref } from "vue";
const form = reactive({
  name: "",
  pwd: "",
});

const rules = {
  name: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 5, message: "用户名长度3-5", trigger: "blur" },
  ],
  pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
const refForm = ref(null);

const submit = () => {
  refForm.value.validate((res) => {
    // console.log(res);
    if (!res) return;
    // console.log('验证通过');
    getdata(form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        ElNotification({
          title: "Success",
          message: err.response.data.msg,
          type: "error",
          duration:3000
        });
      });
  });
};
</script>