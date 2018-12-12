<template>
  <el-row>
    <el-button 
      v-for='(b, index) in adapterBtns'
      @click='clickHandler(b)'
      :type='b.type'
      :size='b.size || "medium"'
      :plain='b.plain'
      :disabled='b.disabled'
      :round='b.round'
      :circle='b.circle'
      :key='index'>
      <i  v-if='b.icon' :class='[b.icon, "el-icon--left"]'></i>
      {{b.name}}
    </el-button>
  </el-row>
</template>
<script>
/**
    @param {
            label:'头', 
            labelName:'参数名',
            type: 'operator', 
            
            --------------------
            buttons: [
                {type: 'primary', size:'small', plain, round, circle ...}
            ]
            ---------or---------
            adapterBtns: (row) => {
                return [button]
            }
            --------------------
           } : Object 
**/
import cell from './cell'
import event_table from '../event'
export default {
  mixins: [ cell ],
  name: 'operator',
  data: function () {
    return {}
  },
  computed: {
    adapterBtns() {
       let btns = this.header.buttons || [];
       if(this.header.adapterBtns && this.header.adapterBtns.constructor === Function) {
          btns = this.header.adapterBtns(this.row)
       }
       return btns
    }
  },
  methods: {
    clickHandler(button) {
      event_table.$emit('operator_click', {button, row: this.row})
    }
  },
  mounted: function () {}
}
</script>
