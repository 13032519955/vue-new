
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      showMsg: 'sysMsg/changeData'
    })
  }
}
