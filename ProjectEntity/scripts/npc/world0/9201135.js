/**
 * @NPC: Audrey
 * @ID: 9201135
 * @Map Id: 540000000
 * @Function: Teleport to Kampung Village and Trend Zone Metropolis
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
    cm.sendSimple("Where would you like to travel to? \r\n#L0#Kampung Village#l\r\n#L1#Trend Zoone Metroplis#l\r\n#L2#Central Business District#l");
}else if (status == 1){
  if (selection == 0){
      if(cm.c.getPlayer().getMapId() == 551000000){
      cm.sendNext("You are already here!");
      cm.dispose();
      }else {
      cm.warp(551000000);
      cm.dispose();
  }
  }
  if(selection == 1){
      if(cm.c.getPlayer().getMapId() == 550000000){
      cm.sendNext("You are already here!");
      cm.dispose();
      }else {
      cm.warp(550000000);
      cm.dispose();
  }
  }
  if(selection == 2){
      if(cm.c.getPlayer().getMapId() == 540000000){
      cm.sendNext("You are already here!");
      cm.dispose();
      }else {
      cm.warp(540000000);
      cm.dispose();
  }
  }
    
}
}
}