import http from "./http.js";
const URL_AUTH = {
  LOGIN: "/api/v1/auth/login",
  LOGOUT: "/api/v1/auth/logout"
};
const URL_SHARE = {
  CITY: '/api/v1/common/region',
};
const URL_DM = {
  ACT_PLANT : '/api/v1/activity/plant/baseMes', // 1,26
  ACT_STRAW : '/api/v1/activity/straw/baseMes', // 5,14,18-22
  ACT_MULCH : '/api/v1/activity/sow/baseMes', // 3,4
  ACT_STOCK : '/api/v1/activity/livestock/baseMes',
  ACT_FISH : '/api/v1/activity/aquatic/baseMes',
  // 数据详情
  ACT_PLANT_INFO : '/api/v1/activity/plant/detailInfo', // 1,26
  ACT_STRAW_INFO : '/api/v1/activity/straw/detailInfo', // 5,14,18-22
  ACT_MULCH_INFO : '/api/v1/activity/sow/detailInfo', // 3,4
  ACT_STOCK_INFO : '/api/v1/activity/livestock/detailInfo',
  ACT_FISH_INFO : '/api/v1/activity/aquatic/detailInfo',
}
const URL_ABNORMAL={
  AB_MAIN:'/api/v1/OutlierValue/abnormalValue',
  AB_TOTAL:'/api/v1/OutlierValue/abnormalInfo',
}

export default {
  // 登录
  async login({ username, password, src = "web" }) {
    let resp = await http(URL_AUTH.LOGIN, "POST", "url", {
      username,
      password,
      src
    });
    return resp;
  },
  logout() {
    return http(URL_AUTH.LOGOUT, "POST");
  },
  // 获取省市区县
  async getCity({ code,level }) {
		let resp = await http(URL_SHARE.CITY,'GET','url',{ code,level })
		return resp
  },
  // 活动水平数据
  async getActPlant({ code,tableId,pageNo,pageSize,keyWord }) {
		let resp = await http(URL_DM.ACT_PLANT,'GET','url',{ code,tableId,pageNo,pageSize,keyWord })
		return resp
  },
  async getActStraw({ code,tableId,pageNo,pageSize,keyWord }) {
		let resp = await http(URL_DM.ACT_STRAW,'GET','url',{ code,tableId,pageNo,pageSize,keyWord })
		return resp
  },
  async getActMulch({ code,tableId,pageNo,pageSize,keyWord }) {
		let resp = await http(URL_DM.ACT_MULCH,'GET','url',{ code,tableId,pageNo,pageSize,keyWord })
		return resp
  },
  async getActStock({ code,tableId,pageNo,pageSize,keyWord }) {
		let resp = await http(URL_DM.ACT_STOCK,'GET','url',{ code,tableId,pageNo,pageSize,keyWord })
		return resp
  },
  async getActFish({ code,tableId,pageNo,pageSize,keyWord }) {
		let resp = await http(URL_DM.ACT_FISH,'GET','url',{ code,tableId,pageNo,pageSize,keyWord })
		return resp
  },
  // 获取数据详情
  async getActPlantInfo({ id, tableId }) {
		let resp = await http(URL_DM.ACT_PLANT_INFO,'GET','url',{ id, tableId })
		return resp
  },
  async getActStrawInfo({ id, tableId }) {
		let resp = await http(URL_DM.ACT_STRAW_INFO,'GET','url',{id, tableId })
		return resp
  },
  async getActMulchInfo({ id, tableId }) {
		let resp = await http(URL_DM.ACT_MULCH_INFO,'GET','url',{ id, tableId })
		return resp
  },
  async getActStockInfo({ id, tableId }) {
		let resp = await http(URL_DM.ACT_STOCK_INFO,'GET','url',{ id, tableId })
		return resp
  },
  async getActFishInfo({ id, tableId }) {
		let resp = await http(URL_DM.ACT_FISH_INFO,'GET','url',{ id, tableId })
		return resp
  },
  // 异常值分析与管理
  async getAbMain({ tableId, code, level, name, pageNo, pageSize }) {
		let resp = await http(URL_ABNORMAL.AB_MAIN,'GET','url',{ tableId, code, level, name, pageNo, pageSize })
		return resp                                             
  },
  async getAbTotal({ tableId, code, level, pageNo, pageSize }) {
		let resp = await http(URL_ABNORMAL.AB_TOTAL,'GET','url',{ tableId, code, level, pageNo, pageSize })
		return resp                                             
  },
};
