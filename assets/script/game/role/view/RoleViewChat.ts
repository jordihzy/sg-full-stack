/*
 * @Author: SS
 * @Date: 2022-06-27
 */

import { EditBox, EventTouch, Label, Node, Vec3, _decorator } from 'cc';
import { DEBUG } from 'cc/env';

import { ecs } from "../../../../../extensions/oops-framework/assets/libs/ecs/ECS";
import VMLabel from '../../../../../extensions/oops-framework/assets/libs/model-view/VMLabel';
import { oops } from '../../../../../extensions/oops-framework/assets/core/Oops';

import { smc } from '../../common/ecs/SingletonModuleComp';
import { CCComp } from '../../common/ecs/view/CCComp';
import { Role } from '../Role';
import { RoleModelComp } from '../model/RoleModelComp';
import { UIID } from '../../common/config/GameUIConfig';
const { ccclass, property } = _decorator;

/** 角色摇撼控制 */
@ccclass("RoleViewChat")
@ecs.register('RoleViewUIJoystick', false)
export class RoleViewChat extends CCComp {

    @property({ type: EditBox })
    chatContent: EditBox = null!;

    /** 控制的目标角色 */
    private target: Role = null!;

    start() {
        this.target = this.ent as Role;
    }

    closeSelf() {
        oops.gui.remove(UIID.Demo_Chat);
    }

    /** 聊天 */
    private chat() {
        if (this.chatContent.string != "") {
            smc.room.chat(this.chatContent.string);
            this.chatContent.string = "";
        }
    }

    reset(): void {

    }
}