# UI库组件中常用的玩法

常用element ui库有些特殊用法，进一步封装延展，后续项目中实时运用

## el-date-picker日期选择器

```
// 传给后台时间类型是yyyy-MM-dd
  <el-form-item prop="date" label="日期 :">
    <el-date-picker
    type="date"
    placeholder="请选择"
    v-model="ruleForm.date"
    style="width: 100%;"
    value-format="yyyy-MM-dd"
    :picker-options="expireTimeOption"
    ></el-date-picker>
  </el-form-item>

// 默认选择时间是当天之后
  expireTimeOption: {
    disabledDate(time) {
          return time.getTime() => Date.now();
      }
  },

```