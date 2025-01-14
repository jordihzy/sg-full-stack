/*
 * @Author: dgflash
 * @Date: 2022-04-14 17:08:01
 * @LastEditors: dgflash
 * @LastEditTime: 2022-06-16 10:05:54
 */
import { Animation, Component, Node, Label, UITransform, _decorator, Layout } from "cc";
import { LanguageLabel } from "../../../../../extensions/oops-framework/assets/core/gui/language/LanguageLabel";

const { ccclass, property } = _decorator;

@ccclass('RoleViewSingleChat')
export class RoleViewSingleChat extends Component {
    @property(Label)
    private chatContent: Label | null = null;

    @property(Label)
    private userName: Label | null = null;

    @property(Node)
    private msgHeadGroup: Node | null = null;

    onLoad() {
        var node = this.node.parent;
    }

    /**
     * 显示提示
     * @param useI18n   设置为 true 时，使用多语言功能 msg 参数为多语言 key
     */
    chatMsg(name: string, msg: string, fromSelf: boolean, useI18n: boolean) {
        this.userName.string = name;
        this.chatContent.string = msg;
        if (fromSelf) {
            //do nothing just use the default settings
            console.log("horizontal is", this.chatContent.node.getComponent(Label).horizontalAlign);
        } else {
            this.msgHeadGroup.getComponent(Layout).paddingLeft = 0;
            this.chatContent.node.setPosition(-this.chatContent.node.position.x, this.chatContent.node.position.y);
            this.chatContent.node.getComponent(UITransform).setAnchorPoint(0, 1);
            this.chatContent.node.getComponent(Label).horizontalAlign = 0; //左对齐
            
        }
    }
}