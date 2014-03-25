/**
 * @NPC: Bell
 * @ID: 9201057
 * @Map Id: 103000100 + 600010001
 * @Function: Teleport to Kerning City
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
    cm.sendSimple("Would you like to travel on the subway? \r\n#L0#Yes#l\r\n#L1#No#l");   
}else if (status == 1) {
    if (selection == 0) {
        if (cm.c.getPlayer().getMapId() == 103000100) {
        cm.warp (600010001);
        cm.dispose();
    }else
        cm.warp (103000100);
        cm.dispose();
    
    }else if (selection == 1){
        cm.dispose();
    }
}
}
}