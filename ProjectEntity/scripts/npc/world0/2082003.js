/**
 * @NPC: Corba
 * @ID: 2082003
 * @Map Id: 240000110
 * @Function: Teleports you to the temple of time
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
    cm.sendSimple("Would you like to go to the Temple of Time?\r\n#L0#Yes#l\r\n#L1#No#l");
    }else if (status == 1) {
    if (selection == 0) {
        cm.warp(200090500);
        cm.dispose();
    }
    if (selection == 1){
        cm.dispose();
}
}
}
}