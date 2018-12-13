<template>
    <el-form :model="params" label-width="100px" ref="sForm" label-position="right">{{options}}
      <slot></slot>
      <el-row v-for='i in rows' :key='i' :gutter="20">
        <el-col v-for='j in cols' :key='j' :span="spanGet" v-if='options[cols*i + (j-1)]'>
          <search-sprite :params='params' :form-one='options[cols*i + (j-1)]'></search-sprite>
        </el-col>
      </el-row>
    </el-form>
</template>
<script>
import searchSprite from './searchSprite';
export default {
  props: {
    options: {
      default: function() {
        return [];
      },
      type: Array
    },
    params: {
      default: function() {
        return {};
      },
      type: Object
    },
    hash: {
      default: true,
      type: Boolean
    },
    cols: {
      default: 3,
      type: Number
    }
  },
  name: 'search-comps',
  computed: {
      spanGet() {
          return Math.ceil(24 / this.col)
      }
  },
  data: function() {
    return {
      rows: Math.ceil(this.options.length / this.col),
      tableRef: null
    }
  },
  mounted() {
    if (this.hash) {
      let routerQuery = this.$route.query;
      if (routerQuery) Object.assign(this.params, routerQuery);
    }
  },
  methods: {
    search() {
        if(!!this.tableRef) this.tableRef.load(this.params);
        // 改变hash
        if(this.hash) this.$router.replace({ path: this.$route.path, query: this.params });
    },
    setRelationTable(t) {
        this.tableRef = t;
    },
    async reset() {
      this.options.forEach(item => {
        if (item.type === 'dateRange') {
          // debugger
          this.params[item.key[0]] = '';
          this.params[item.key[1]] = '';
        } else {
          this.$set(this.params, item.key, '');
        }
      });
      this.$refs['sForm'].resetFields();
      this.search();
    }
  },
  components: {
    searchSprite,
  },
};
</script>