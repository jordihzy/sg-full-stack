/*
 * @Author: dgflash
 * @Date: 2022-05-12 14:18:45
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-24 14:41:16
 */

/** 房间配置信息（网关做好就删除） */
export class RoomConfig {
    /** 强制HTTPS */
    static https: boolean = false;
    /** 匹配服务器 */
    static ServerMatch: string = `${true ?
        ((RoomConfig.https ? "https" : "http") + "://127.0.0.1:3000") :
        ((RoomConfig.https ? "https" : "http") + "://47.241.9.181:3000")}`;     // 如果使用强制 HTTPS，这里的IP要修改为证书中的域名，默认是作者外网测试服务器
}