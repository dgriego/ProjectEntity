/**
 * @NPC: Teleporter
 * @ID: 3000
 * @Map Id: 910000000
 * @Function: Teleporter
 * @Author FMJ Tyson
 */

var status = 0;
function start() {
status = -1;
action(1, 0, 0);
}

function action(mode, type, selection) {

if (mode == -1) {
cm.dispose();
}
else {
if (status == 0 && mode == 0) {
cm.dispose();
return;
}
if (mode == 1) {
status++;
}
else {
status--;
}
if (status == 0) { 
        cm.sendSimple("Where would you like to travel? \r\n#L0#Henesys#l\t#L1#El Nath#l\t#L2#Ludibruim#l\t#L3#Leafre#l\r\n#L4#Orbis#l\t#L5#Ariant#l");   
}else if (status == 1) {
    if (selection == 0) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (100000000);
        cm.dispose();
    }
}
        if (selection == 1) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (211000000);
        cm.dispose();
    }
        }
        if (selection == 2) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (220000000);
        cm.dispose();
    }
        }
        if (selection == 3) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (240000000);
        cm.dispose();
    }
        }
        if (selection == 4) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (200000000);
        cm.dispose();
    }
        }
        if (selection == 5) {
        if (cm.c.getPlayer().getMapId() == 910000000) {
        cm.warp (260000000);
        cm.dispose();
    }
        }
}
}
}
