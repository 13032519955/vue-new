<template>
  <div>
    <el-form-item :label="formOne.label"> 
        <!--input {key, placeholder, size}-->
        <el-input 
            v-if="!formOne.type" 
            v-model="params[formOne.key]" 
            :placeholder="formOne.placeholder || '请输入内容'" 
            :size='formOne.size || "small"'>
        </el-input>
        <!--select {key, placeholder, valueKey 默认都为绑定对象类型, size, keyName 指定options的value, labelName 指定options的key, options: Array<object | {value, label}> }-->
        <el-select 
            v-if="formOne.type === 'select'"
            v-model="params[formOne.key]" 
            :value-key='formOne.valueKey || "value"' 
            @change='(item) => {changeHandler(item, formOne)}' 
            :placeholder="formOne.placeholder || '请选择内容'" 
            :size='formOne.size || "small"'>
                <el-option 
                    v-for="item in formOne.options"
                    :key="item[formOne.keyName || 'value']" 
                    :label="item[formOne.labelName || 'label']" 
                    :value="formOne.Object?item:item[formOne.keyName || 'value']">
                </el-option>
        </el-select>
        <!--dateRange {key: Array<String>, placeholder, format, separator, startPlaceholder, endPlaceholder size}-->
        <el-date-picker 
            style='width: 100%' 
            :placeholder="formOne.placeholder  || '请选择日期'" 
            v-if="formOne.type === 'dateRange'" 
            :size='formOne.size || "small"'
            :value-format='formOne.format || "yyyy-MM-dd"' 
            v-model="dateValue" 
            @change='dateRangeChangeHandler' 
            type="daterange" 
            :range-separator='formOne.separator || "至"' 
            :start-placeholder='formOne.startPlaceholder || "开始日期"'
            :end-placeholder='formOne.endPlaceholder || "结束日期"'>
        </el-date-picker>
        
        <el-date-picker 
            v-model="params[formOne.key]" 
            v-if="formOne.type === 'month' || formOne.type === 'year'" 
            :value-format='formOne.format || "yyyy-MM-dd"'
            :type="formOne.type" 
            placeholder="选择日期">
        </el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    formOne: {
      default: function() {
        return {};
      },
      type: Object,
    },
    params: {
      default: function() {
        return {};
      },
      type: Object,
    }
  },
  name: 'search-sprite',
  data: function() {
    return {
      dateValue: '', // 日期范围的值
    };
  },
  mounted() {
    if (this.formOne.type === 'dateRange') {
      // 监测默认params
      let start = this.params[this.formOne.key[0]];
      let end = this.params[this.formOne.key[1]];
      if (start === '' || end === '' || !start || !end) this.dateValue = '';
      else this.dateValue = [start, end];
    }
  },
  methods: {
    dateRangeChangeHandler(dates) {
      if (dates) {
        this.params[this.formOne.key[0]] = dates[0];
        this.params[this.formOne.key[1]] = dates[1];
      } else {
        this.params[this.formOne.key[0]] = '';
        this.params[this.formOne.key[1]] = '';
      }
    },
    // select change handler --> 未来扩展使用
    changeHandler(item, formOne) {
      this.$emit('changeAction', item, formOne);
    },
  },
};
</script>