
$(document).ready(function() {



var player = {
  level: 1,
  gold: 0,
  experience: 0,
  summons: 30,
  summonbosscounter: 0,
  summoninterval: 10000,

  head: {},
  chest: {},
  leg: {},
  boot: {},
  ring: {},
  talisman: {},
  necklace: {},
  weapon: {},
  wrist: {},
  shoulder: {},
  book: {},
  glove: {},

  totalHealth: 0,
  totalMana: 0,
  totalDodge: 0,
  totalMagicPow: 0,
  totalDamage: 0,
  totalIceDMG: 0,
  totalFireDMG: 0,
  totalStormDMG: 0,
  totalCritical: 0,
  totalBloodDMG: 0,
  totalShadowDMG: 0,
  totalNatureDMG: 0,
  totalHealPow: 0,
  totalLifesteal: 0,
 }

var buffHealth = 0;
var buffMana = 0;
var buffDodge = 0;
var buffMagicPow = 0;
var buffDamage = 0;
var buffIceDMG = 0;
var buffFireDMG = 0;
var buffStormDMG = 0;
var buffBloodDMG = 0;
var buffCritical = 0;
var buffShadowDMG = 0;
var buffNatureDMG = 0;
var buffHealPow = 0;
var buffLifesteal = 0;

var nerfHealth = 0;
var nerfMana = 0;
var nerfDodge = 0;
var nerfMagicPow = 0;
var nerfDamage = 0;
var nerfIceDMG = 0;
var nerfFireDMG = 0;
var nerfStormDMG = 0;
var nerfBloodDMG = 0;
var nerfCritical = 0;
var nerfShadowDMG = 0;
var nerfNatureDMG = 0;
var nerfHealPow = 0;
var nerfLifesteal = 0;

var Health = 200*player.level + buffHealth + player.totalHealth - nerfHealth;
var Mana = 100*player.level + buffMana + player.totalMana - nerfMana;
var Dodge = 5*player.level + buffDodge + player.totalDodge - nerfDodge;
var MagicPow = 10*player.level + buffMagicPow + player.totalMagicPow - nerfMagicPow;
var Damage = 10*player.level + buffDamage + player.totalDamage - nerfDamage;
var IceDMG = 5*player.level + buffIceDMG + player.totalIceDMG - nerfIceDMG;
var FireDMG = 5*player.level + buffFireDMG + player.totalFireDMG - nerfFireDMG;
var StormDMG = 5*player.level + buffStormDMG + player.totalStormDMG - nerfStormDMG;
var Critical = 1 + buffCritical + player.totalCritical - nerfCritical;
var BloodDMG = 5*player.level + buffBloodDMG + player.totalBloodDMG - nerfBloodDMG;
var ShadowDMG = 5*player.level + buffShadowDMG + player.totalShadowDMG - nerfShadowDMG;
var NatureDMG = 5*player.level + buffNatureDMG + player.totalNatureDMG - nerfNatureDMG;
var HealPow = 5*player.level + buffHealPow + player.totalHealPow - nerfHealPow;
var Lifesteal = buffLifesteal + player.totalLifesteal - nerfLifesteal;



var currentplayerhealth;
var currentplayermana;
var currentbosshealth;



var battle=false;
var boss = {
  level: 1,  
  health: this.level * 250,
  damage: this.level * 25,  
  
}


 var iceboltmana = 10*boss.level;
 var shieldmana = 10*boss.level;
 var healmana = 14*boss.level;
 var fireboltmana = 10*boss.level;
 var stormboltmana= 10*boss.level;
 var shadowboltmana= 20*boss.level;
 var bloodstrikemana= 20*boss.level;
 var thornsmana= 15*boss.level;
 var buffmagicmana= 30*boss.level;
 var naturehealmana=15*boss.level;


var playerdamage = false;

var basicattackcooldown=false;
var iceboltcooldown=false;
var fireboltcooldown=false;
var stormboltcooldown=false;
var shadowboltcooldown=false;
var thornscooldown=false;
var bloodstrikecooldown=false;
var healcooldown=false;
var shieldcooldown=false;
var bloodsapcooldown=false;
var buffmagiccooldown=false;
var naturehealcooldown=false;
var manarestorecooldown=false;


var clickeditemid;
var affixnames = [
  "Blindness",
  "Bravery",
  "Burning",
  "Burrowing",
  "Conjuration",
  "Darkness",
  "Dawn",
  "Death",
  "Deception",
  "Defense",
  "Deflection",
  "Delerium",
  "Desire",
  "Despair",
  "Destruction",
  "Domination",
  "Doom",
  "Dragonslaying",
  "Dreaming",
  "Durability",
  "Dusk",
  "Evocation",
  "Fire",
  "Flame",
  "Freezing",
  "Fury",
  "Glory",
  "Growth",
  "Healing",
  "Heroism",
  "Hope",
  "Horror",
  "Ice",
  "Illusion",
  "Impact",
  "Imprisonment",
  "Incineration",
  "Insanity",
  "Invulnerability",
  "Invisibility",
  "Justice",
  "Life",
  "Light",
  "Lightlessness",
  "Lightning",
  "Love",
  "Madness",
  "Malice",
  "Mercy",
  "Midnight",
  "Obedience",
  "Peace",
  "Petrification",
  "Piercing",
  "Planeswalking",
  "Prophecy",
  "Rage",
  "Resurrection",
  "Retribution",
  "Seeking",
  "Shadow",
  "Shadowbinding",
  "Shattering",
  "Shieldbreaking",
  "Shielding",
  "Shocking",
  "Siege",
  "Sightblinding",
  "Silence",
  "Smiting",
  "Solidity",
  "Soul",
  "Soulbinding",
  "Soulcutting",
  "Spellbreaking",
  "Starlight",
  "Stealth",
  "Stonecutting",
  "Striking",
  "Sundering",
  "the Angel",
  "the Banshee",
  "the Centaur",
  "the Demon",
  "the Desert",
  "the Dragon",
  "the Dwarf",
  "the Elf",
  "the Elements",
  "the Fairie",
  "the Gargoyle",
  "the Genie",
  "the Ghost",
  "the Ghoul",
  "the Giant",
  "the Gnome",
  "the Goblin",
  "the God",
  "the Gremlin",
  "the Gryphon",
  "the Homunculus",
  "the Lich",
  "the Mermaid",
  "the Monster",
  "the Ogre",
  "the Orc",
  "the Titan",
  "the Troll",
  "the Vampire",
  "the Werebeast",
  "the Werewolf",
  "the Wight",
  "Thought",
  "Townsaving",
  "Treachery",
  "True Sight",
  "Twilight",
  "Valor",
  "Vengeance",
  "Void",
  "Warding",
  "Wayfinding",
  "Weightlessness",
  "Wind",
  "Winter",
  "Wisdom",
  "Woundhealing",
];
var itemname = "";
var itemslotnames = ["Talisman", "Helmet", "Ring", "Shoulders", "Chestplate", "Book", "Bracelet", "Leggings", "Gloves", "Weapon", "Boots", "Necklace"];
var slotplayernames = ["talisman", "head", "ring", "shoulder", "chest", "book", "wrist", "leg", "glove", "weapon", "boot", "necklace"];
var itemslot = 0;
var generateditem = {};
var rarities = ["Common", "Magic", "Rare", "Epic", "Legendary"];
var affixnumber = "";
var itemrarity;
var currentitemid = "";
// affixes : name > starting stat > stat per level
var affixes = [
  ["Health", 50, 25],
  ["Mana", 50, 25],
  ["Dodge", 4, 0],
  ["Critical", 5, 0],
  ["Damage", 10, 5],
  ["MagicPow", 20, 10],
  ["ShadowDMG", 30, 15],
  ["NatureDMG", 30, 15],
  ["IceDMG", 30, 15],
  ["FireDMG", 30, 15],
  ["BloodDMG", 30, 15],
  ["StormDMG", 30, 15],
  ["HealPow", 20, 10],
  ["Lifesteal",10,5]
]
var randomstat;
var usedstats = [];
var itempicturenum;
var iconnumbers = {
  head: 5,
  chest: 17,
  leg: 7,
  boot: 10,
  ring: 11,
  talisman: 23,
  weapon: 56,
  wrist: 13,
  shoulder: 10,
  book: 11,
  glove: 11,
  necklace: 7,
}

var inventory = {
  i1: {},
  i2: {},
  i3: {},
  i4: {},
  i5: {},
  i6: {},
  i7: {},
  i8: {},
  i9: {},
  i10: {},
  i11: {},
  i12: {},
  i13: {},
  i14: {},
  i15: {},
  i16: {},
  i17: {},
  i18: {},
  i19: {},
  i20: {},
  i21: {},
  i22: {},
  i23: {},
  i24: {},
  i25: {},
  i26: {},
  i27: {},
}


var mouseX;
var mouseY;
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function critical(x) {
  var critroll = Math.floor(Math.random() * (100 - Critical)) + 1;

  if (x === "basicattack") {    
    if (critroll < Critical) {playerdamage = playerdamage * 2;}   
    $("#rightinfo").prepend("<p>Attack does: "+playerdamage+"DMG</p>");

    currentbosshealth=currentbosshealth-playerdamage;
    currentplayermana=currentplayermana + Math.floor(Mana/20);
    if(currentplayerhealth<Health){
    currentplayerhealth=currentplayerhealth+ Lifesteal;
   }
    }
  
  if (x === "icebolt"){
    if (critroll < Critical) {playerdamage = playerdamage * 2;}     
    currentbosshealth=currentbosshealth-playerdamage;
    $("#rightinfo").prepend("<p>Icebolt does: "+playerdamage+"DMG!");  
    currentplayermana=currentplayermana - iceboltmana;
   }  

   if (x === "firebolt"){
    if (critroll < Critical) {playerdamage = playerdamage * 2;}     
    currentbosshealth=currentbosshealth-playerdamage;
    $("#rightinfo").prepend("<p>Firebolt does: "+playerdamage+"DMG!");  
    currentplayermana=currentplayermana - fireboltmana;
   }  

    if (x === "stormbolt"){
    if (critroll < Critical) {playerdamage = playerdamage * 2;}     
    currentbosshealth=currentbosshealth-playerdamage;
    $("#rightinfo").prepend("<p>Stormbolt does: "+playerdamage+"DMG!");  
    currentplayermana=currentplayermana - iceboltmana;
   }  

  if (x === "bloodstrike"){
    if (critroll < Critical) {playerdamage = playerdamage * 3;}     
    currentbosshealth=currentbosshealth-playerdamage;
    $("#rightinfo").prepend("<p>BloodStrike does: "+playerdamage+"DMG!");  
    currentplayermana=currentplayermana - bloodstrikemana;
    currentplayerhealth=currentplayerhealth - Math.floor(currentplayerhealth/2);
   }  

   if (x === "shadowbolt"){
    if (critroll < Critical) {playerdamage = playerdamage * 2;}     
    
    function throwshadowbolt(){
      $("#rightinfo").prepend("<p>Shadow Burst does: "+playerdamage+"DMG!");  
      currentplayermana=currentplayermana - shadowboltmana;
      currentbosshealth=currentbosshealth-playerdamage;
    }
    setTimeout(throwshadowbolt,5000);
   }  

}


function bloodstrike(){
  playerdamage= Math.floor(Damage/2 + BloodDMG + Health/5);  
    
  function resetbloodstrike(){
  bloodstrikecooldown=false;
  buffLifesteal=0;
  $("#bloodstrike").removeClass("oncooldown");}   
 
   if (bloodstrikecooldown===false && currentplayermana > bloodstrikemana){
     bloodstrikecooldown=true;
      buffLifesteal=BloodDMG;
      currentplayerhealth=Math.floor(currentplayerhealth/2); 
     $("#bloodstrike").addClass("oncooldown");
     critical("bloodstrike");  
     setTimeout(resetbloodstrike,5000);
   }
}

function icebolt(){
  playerdamage= Math.floor(Damage/2 + IceDMG + MagicPow/2);  
    
  function reseticebolt(){
  iceboltcooldown=false;
  $("#icebolt").removeClass("oncooldown");}   
 
   if (iceboltcooldown===false && currentplayermana > iceboltmana){
     iceboltcooldown=true;
     $("#icebolt").addClass("oncooldown");
     critical("icebolt");  
     setTimeout(reseticebolt,5000);
   }
}

function firebolt(){
  playerdamage= Math.floor(Damage/2 + FireDMG + MagicPow/2);  
    
  function resetfirebolt(){
  fireboltcooldown=false;
  $("#firebolt").removeClass("oncooldown");}   
 
   if (fireboltcooldown===false && currentplayermana > fireboltmana){
     fireboltcooldown=true;
     $("#firebolt").addClass("oncooldown");
     critical("firebolt");  
     setTimeout(resetfirebolt,5000);
   }
}

function stormbolt(){
  playerdamage= Math.floor(Damage/2 + StormDMG + MagicPow/2);  
    
  function resetstormbolt(){
  stormboltcooldown=false;
  $("#stormbolt").removeClass("oncooldown");}   
 
   if (stormboltcooldown===false && currentplayermana > stormboltmana){
     stormboltcooldown=true;
     $("#stormbolt").addClass("oncooldown");
     critical("stormbolt");  
     setTimeout(resetstormbolt,5000);
   }
}

function shadowbolt(x){
  playerdamage= Math.floor(Damage/2 + ShadowDMG*2 + MagicPow);  
    
  function resetshadowbolt(){
  shadowboltcooldown=false;
  $("#shadowbolt").removeClass("oncooldown");}   
 
   if (shadowboltcooldown===false && currentplayermana > shadowboltmana){
     shadowboltcooldown=true;
     $("#shadowbolt").addClass("oncooldown");
     critical("shadowbolt");  
     setTimeout(resetshadowbolt,5000);
   }
}

function basicattack(x) {
   playerdamage= Damage;

  function resetbasic(){
  basicattackcooldown=false;
  $(".-basic").removeClass("oncooldown");    
  }   
   if (basicattackcooldown===false){
     basicattackcooldown=true;
     $(".-basic").addClass("oncooldown");
     critical("basicattack");  
     setTimeout(resetbasic,4000);
   }

}  




function shield(){
   function resetshield(){
    buffDodge=0;
    shieldcooldown=false;
    $("#shield").removeClass("oncooldown"); 
   }
  
  if (shieldcooldown===false && currentplayermana>shieldmana){
   $("#shield").addClass("oncooldown");    
  buffDodge=100;
  currentplayermana=currentplayermana - shieldmana;
  function removeshield(){
    buffDodge=0;
  }

  setTimeout(removeshield,5000);    
  setTimeout(resetshield,10000);
  }
  
}

function buffmagic(){

   function resetbuffmagic(){
    buffmagiccooldown=false;
    $("#buffmagic").removeClass("oncooldown"); 
   }  

   function removebuffmagic(){
    buffMagicPow=0;
   }

  if (buffmagiccooldown===false && currentplayermana > buffmagicmana){
   $("#buffmagic").addClass("oncooldown"); 
   buffMagicPow=MagicPow;    
   setTimeout(resetbuffmagic,10000);
   setTimeout(removebuffmagic,5000);
   currentplayermana=currentplayermana- buffmagicmana;
   $("#rightinfo").prepend("<p>Magic Power increased by:  "+MagicPow+"!");  
  }
  
}


function heal(){
   function resetheal(){
    healcooldown=false;
    $("#heal").removeClass("oncooldown"); 
   }  

   if (healcooldown===false && currentplayermana > healmana){
   $("#heal").addClass("oncooldown"); 
   currentplayerhealth=currentplayerhealth + HealPow;  
    $("#rightinfo").prepend("<p>You Heal for:  "+HealPow+"HP!");  
   setTimeout(resetheal,10000);   
   currentplayermana=currentplayermana- healmana;
  }
  
}

function manarestore(){
   function resetmanarestore(){
    manarestorecooldown=false;
    $("#manarestore").removeClass("oncooldown"); 
   }  

   if (manarestorecooldown===false){
   $("#manarestore").addClass("oncooldown"); 
   currentplayermana= currentplayermana + Math.floor(HealPow/2);   
   $("#rightinfo").prepend("<p>Mana restored: "+Math.floor(HealPow/2)+"!");
   setTimeout(resetmanarestore,10000);   
   }
  
}




function thorns(){
      
  function resetthorns(){
  thornscooldown=false;
  $("#thorns").removeClass("oncooldown");}   
 
  function thornsdamage(){
  playerdamage= Math.floor(Damage/2 + NatureDMG/2); 
  currentbosshealth=currentbosshealth-playerdamage;
  currentplayermana=currentplayermana-thornsmana;
  $("#rightinfo").prepend("<p>Thorns does:  "+playerdamage+"DMG!");
  }

   if (thornscooldown===false && currentplayermana > thornsmana){
     thornscooldown=true;
     $("#thorns").addClass("oncooldown");
      setTimeout(resetthorns,5000);
      setTimeout(thornsdamage,1000);
      setTimeout(thornsdamage,2000);
      setTimeout(thornsdamage,3000);

   }
}


function nheal(){
      console.log("sdsdsdsd");

  function resetnatureheal(){
  naturehealcooldown=false;
  $("#natureheal").removeClass("oncooldown");
}   
 
  function naturehealdamage(){
  playerdamage= Math.floor(NatureDMG/3); 
  currentplayerhealth=currentplayerhealth+playerdamage;
  currentplayermana=currentplayermana-naturehealmana;
  $("#rightinfo").prepend("<p>Nature heals for: "+playerdamage+"HP!");
  }

   if (naturehealcooldown===false && currentplayermana > naturehealmana){
      naturehealcooldown=true;
      $("#natureheal").addClass("oncooldown");
      setTimeout(resetnatureheal,5000);
      setTimeout(naturehealdamage,1000);
      setTimeout(naturehealdamage,2000);
      setTimeout(naturehealdamage,3000);

   }
}



 $("#basic").click(function(){basicattack();});
 $("#icebolt").click(function(){icebolt();});
 $("#shield").click(function(){shield();});
 $("#firebolt").click(function(){firebolt();});
 $("#stormbolt").click(function(){stormbolt();}); 
 $("#shadowbolt").click(function(){shadowbolt();}); 
 $("#bloodstrike").click(function(){bloodstrike();}); 
 $("#thorns").click(function(){thorns();}); 
 $("#heal").click(function(){heal();}); 
 $("#natureheal").click(function(){nheal();});  
 $("#buffmagic").click(function(){buffmagic();}); 
 $("#manarestore").click(function(){manarestore();}); 


  

function displaystats() {

$("#health").text(Health);
$("#mana").text(Mana);
$("#damage").text(Damage);  
$("#critical").text(Critical);
$("#dodge").text(Dodge);
$("#healpow").text(HealPow);
$("#magicpow").text(MagicPow);
$("#ice").text(IceDMG);
$("#fire").text(FireDMG);
$("#storm").text(StormDMG);
$("#nature").text(NatureDMG);
$("#shadow").text(ShadowDMG);
$("#blood").text(BloodDMG);
$("#lifesteal").text(Lifesteal);

$("#gold").text("Gold: "+player.gold);
$("#level").text("Level: "+player.level);  
}

setInterval(displaystats, 2000);
setInterval(countplayerstats, 2000);

function countplayerstats() {

  player.totalHealth = 0;
  player.totalMana = 0;
  player.totalDodge = 0;
  player.totalMagicPow = 0;
  player.totalDamage = 0;
  player.totalIceDMG = 0;
  player.totalFireDMG = 0;
  player.totalStormDMG = 0;
  player.totalCritical = 0;
  player.totalBloodDMG = 0;
  player.totalShadowDMG = 0;
  player.totalNatureDMG = 0;
  player.totalHealPow = 0;
  player.totalLifesteal = 0;

  for (var d = 0; d < slotplayernames.length; d++) {

    if ($.isEmptyObject(player[slotplayernames[d]]) === false) {

      for (var f = 0; f < affixes.length; f++) {

        player["total" + affixes[f][0]] = player["total" + affixes[f][0]] + player[slotplayernames[d]]['totalstats'][affixes[f][0]];

      }
    }
  } // for loops d f

  Health = 200*player.level + buffHealth + player.totalHealth - nerfHealth;
  Mana = 100*player.level + buffMana + player.totalMana - nerfMana;
  Dodge = buffDodge + player.totalDodge - nerfDodge;
  MagicPow = 20*player.level + buffMagicPow + player.totalMagicPow - nerfMagicPow;
  Damage = 10*player.level + buffDamage + player.totalDamage - nerfDamage;
  IceDMG = 15*player.level + buffIceDMG + player.totalIceDMG - nerfIceDMG;
  FireDMG = 15*player.level + buffFireDMG + player.totalFireDMG - nerfFireDMG;
  StormDMG = 15*player.level + buffStormDMG + player.totalStormDMG - nerfStormDMG;
  Critical = 1 + buffCritical + player.totalCritical - nerfCritical;
  BloodDMG = 15*player.level + buffBloodDMG + player.totalBloodDMG - nerfBloodDMG;
  ShadowDMG = 15*player.level + buffShadowDMG + player.totalShadowDMG - nerfShadowDMG;
  NatureDMG = 15*player.level + buffNatureDMG + player.totalNatureDMG - nerfNatureDMG;
  HealPow = 15*player.level + buffHealPow + player.totalHealPow - nerfHealPow;
  Lifesteal = 15*player.level + buffLifesteal + player.totalLifesteal - nerfLifesteal;

  if (Dodge<0){Dodge=0;}
  if (MagicPow<0){MagicPow=0}
  if (Damage<0){Damage=0}
  if (IceDMG<0){IceDMG=0}
  if (FireDMG<0){FireDMG=0;}
  if (StormDMG<0){StormDMG=0;}
  if (NatureDMG<0){NatureDMG=0;}
  if (ShadowDMG<0){ShadowDMG=0;}
  if (NatureDMG<0){NatureDMG=0;}
  if (HealPow<0){HealPow=0;}
  if (Critical<0){Critical=0;}
  if (Lifesteal<0){Lifesteal=0;}

    } // count stats function

var finishedgenerating = true;


function upgradeitem(){


var theitem=inventory[clickeditemid];
var upgraderarity= Math.floor(Math.random()*rarities.length);

if (theitem["upgrade"]["level"] < 5 && player.gold > theitem["level"]*5){
  player.gold = player.gold - theitem["level"]*5;

  var randomupgradestat= Math.floor(Math.random()*affixes.length);
  var upgradestatamount= Math.floor((upgraderarity+1)*(theitem.level*affixes[randomupgradestat][2])/5);
  var maxupgradestatamount= Math.floor(5*(theitem.level*affixes[randomupgradestat][2])/5);
  var upgradestatrarity= rarities[upgraderarity];  

  theitem.upgrade.stats[affixes[randomupgradestat][0]] = [upgradestatamount, maxupgradestatamount, upgradestatrarity];
  theitem.upgrade.level++;

 function countitemstats(){

  for (var i=0;i<affixes.length;i++){
   
    theitem.totalstats[affixes[i][0]]=theitem.stats[affixes[i][0]][0] + theitem.upgrade.stats[affixes[i][0]][0];
  }

 }
countitemstats();

 } // if upgrade level


} // function upgrade

$("#upgrade").click(function(){
upgradeitem();
});


function createitem() {
  finishedgenerating = false;
  // choose rarity, slot and affix for item
  var randomslot = Math.floor(Math.random() * 12) + 1;
  var randomaffix = Math.floor(Math.random() * affixnames.length);
  var affixnumber = Math.floor(Math.random() * rarities.length) + 1;
  usedstats = [];
  // now generate the item 
  function randomitem(slot) {

    for (var i = 0; i < affixnumber; i++) {

      if (i === 0) {
        generateditem = {};
        usedstats = [];
        itemname = itemslotnames[slot - 1] + " of " + affixnames[randomaffix];
        itemslot = slotplayernames[slot - 1];
        itemrarity = rarities[affixnumber - 1];

        generateditem.name = itemname;
        generateditem.slot = itemslot;
        generateditem.stats = {};
        generateditem.rarity = itemrarity;
        generateditem.value = affixnumber * boss.level;
        generateditem.upgrade = {};
        generateditem.upgrade.level = 0;
        generateditem.upgrade.stats = {};
        generateditem.level = boss.level;
        generateditem.totalstats = {};

         // this generates all possible stats so there's no need for undefined checks and makes calculation easier
        for (var g = 0; g < affixes.length; g++) {
          generateditem.totalstats[affixes[g][0]] = 0;
          generateditem.stats[affixes[g][0]] = [0,0,0];
          generateditem.upgrade.stats[affixes[g][0]] = [0,0,0];
        }

        itempicturenum = iconnumbers[itemslot];
        var randompicturenum = Math.floor(Math.random() * itempicturenum) + 1;
        generateditem.icon = itemslot.toString() + "-" + randompicturenum.toString();

      };

      randomstat = Math.floor(Math.random() * affixes.length);
      while (usedstats.indexOf(randomstat) != -1) {
        randomstat = Math.floor(Math.random() * affixes.length);
      }
      usedstats.push(randomstat);

      var statnumber = Math.floor(Math.random() * (affixes[randomstat][1] + (affixes[randomstat][2] * boss.level)));
      var statmax = affixes[randomstat][1] + (affixes[randomstat][2] * boss.level);

      var statcolor = "Common";
      if (statnumber > statmax / 10) {
        statcolor = "Magic"
      };
      if (statnumber > statmax / 4) {
        statcolor = "Rare"
      };
      if (statnumber > statmax / 2) {
        statcolor = "Epic"
      };
      if (statnumber > statmax / 1.2) {
        statcolor = "Legendary"
      };

      //we finalize the item stats here  
      generateditem.stats[affixes[randomstat][0]] = [statnumber, statmax, statcolor];
      generateditem.totalstats[affixes[randomstat][0]] = statnumber;
    }
    var invcount, itemidcount, itemid, allclasses, itemclass;

    // item done generating
    for (var f = 1; f < 29; f++) {
      invcount = "i" + f;
      itemidcount = "#" + invcount;
      itemid = itemidcount + "S";
      if (jQuery.isEmptyObject(inventory[invcount])) {
        allclasses = "item sprite " + generateditem.icon + " " + generateditem.rarity;
        $(itemidcount).append("<img id='" + itemid + "'class='" + allclasses + "' '></img>");
        f = 50;
        inventory[invcount] = generateditem;

      }
    }

    finishedgenerating = true;
  }

  // this choses item slot

  randomitem(randomslot);
}  


//so right click doesn't fuck up my options menu
document.oncontextmenu = function() {
  return false;
};


function addsummon(){
player.summonbosscounter++;

if (player.summonbosscounter > 10){
player.summonbosscounter=0;
player.summons++;
var fightcount = "Fights: " + player.summons;
$("#fightbutton").text(fightcount);

}

}

// easy leveling function
function checkexp(){

  if (player.experience > 3 * player.level){
    player.experience=0;
    player.level++;
  }

  fightcount = "Fights: " + player.summons;
  $("#fightbutton").text(fightcount);

}
setInterval(checkexp,15000);

function startfight(){
  battle=true;


 basicattackcooldown=false;
 iceboltcooldown=false;
 fireboltcooldown=false;
 stormboltcooldown=false;
 shadowboltcooldown=false;
 thornscooldown=false;
 bloodstrikecooldown=false;
 healcooldown=false;
 shieldcooldown=false;
 buffmagiccooldown=false;
 naturehealcooldown=false;
 manarestorecooldown=false;

 $(".oncooldown").removeClass("oncooldown");  

  

 iceboltmana = 10*boss.level;
 shieldmana = 10*boss.level;
 healmana = 14*boss.level;
 fireboltmana = 10*boss.level;
 stormboltmana= 10*boss.level;
 shadowboltmana= 20*boss.level;
 bloodstrikemana= 20*boss.level;
 thornsmana= 15*boss.level;
 buffmagicmana= 30*boss.level;
 naturehealmana=15*boss.level;


  resetplayerstats()
  var randombossname= Math.floor(Math.random()*13)+1;
  var bossname="boss"+randombossname+" "+" mobsprites bosspic";
  var bosshitroll;

  boss.health = boss.level * 250;
  boss.damage = boss.level*25;
  

   currentbosshealth = boss.health;
   currentplayerhealth = Health;
   currentplayermana = Mana;

    var  bossdamage= boss.damage;
    var  bosscritdamage=boss.damage*2;

  $("#boss").html("<img class='"+bossname+ "' ></img>");
  $("#bosshptext").text(currentbosshealth+"/"+currentbosshealth);
  $("#bosshpbar").css("width","100%");
  $("#leftinfo").empty();
  $("#rightinfo").empty();

  

  function updatehealthbar(){
    var barpercent = currentbosshealth / boss.health*100;
    var playerhpbar = currentplayerhealth / Health *100;
    var playermanabar =currentplayermana / Mana *100;

    $("#bosshpbar").animate({width: barpercent+"%"},"slow");
    $("#bosshptext").text(currentbosshealth + "/"+boss.health);
    $("#playerhpbar").animate({width: playerhpbar+"%"},"slow");
    $("#playermanabar").animate({width: playermanabar+"%"},"slow");
  }



   function bossattack(){
     bossdamage= boss.damage;
     bosscritdamage=boss.damage*3;
     bosshitroll = Math.floor(Math.random() * (100 - Dodge)) + 1;
    


      function attackbasicplayer(){
      bosshitroll = Math.floor(Math.random() * (100 - Dodge)) + 1;

      if (bosshitroll > Dodge){
      $("#leftinfo").prepend("<p>Boss Attacks for: " + bossdamage +" DMG!"+"</p>");
      currentplayerhealth = currentplayerhealth - bossdamage;}
      if(bosshitroll < Dodge){$("#leftinfo").prepend("<p>Boss Missed a basic attack.</p>");}
    }


    function critplayer(){
       bosshitroll = Math.floor(Math.random() * (100 - Dodge)) + 1;

      if (bosshitroll > Dodge){
       $("#leftinfo").prepend("<p>Boss CRITS for: " + bosscritdamage +" DMG!"+"</p>");       
       currentplayerhealth = currentplayerhealth - bosscritdamage;}
      if(bosshitroll < Dodge){$("#leftinfo").prepend("<p>Boss Missed the crit.</p>");}

    }


    function castdodgereduce(){
      nerfDodge = 1000;
      function dodgereduceremove(){
        nerfDodge=0;
      }
      setTimeout(dodgereduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF DODGE!</p>");
    }
       
    function castHealPowreduce(){
      nerfHealPow = 1000;
      function HealPowreduceremove(){
        nerfHealPow=0;
      }
      setTimeout(HealPowreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF HealPow!</p>");
    }


    function castIceDMGreduce(){
      nerfIceDMG = 1000;
      function IceDMGreduceremove(){
        nerfIceDMG=0;
      }
      setTimeout(IceDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF IceDMG!</p>");
    }


    function castFireDMGreduce(){
      nerfFireDMG = 1000;
      function FireDMGreduceremove(){
        nerfFireDMG=0;
      }
      setTimeout(FireDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF FireDMG!</p>");
    }

    function castStormDMGreduce(){
      nerfStormDMG = 1000;
      function StormDMGreduceremove(){
        nerfStormDMG=0;
      }
      setTimeout(StormDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF StormDMG!</p>");
    }

    function castShadowDMGreduce(){
      nerfShadowDMG = 1000;
      function ShadowDMGreduceremove(){
        nerfShadowDMG=0;
      }
      setTimeout(ShadowDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF ShadowDMG!</p>");
    }

    function castNatureDMGreduce(){
      nerfNatureDMG = 1000;
      function NatureDMGreduceremove(){
        nerfNatureDMG=0;
      }
      setTimeout(NatureDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF NatureDMG!</p>");
    }

    function castBloodDMGreduce(){
      nerfBloodDMG = 1000;
      function BloodDMGreduceremove(){
        nerfBloodDMG=0;
      }
      setTimeout(BloodDMGreduceremove,10000);
      $("#leftinfo").prepend("<p> Boss Casts NERF BloodDMG!</p>");
    }




      var bosschoosespell = Math.floor(Math.random()*100);

      if (bosschoosespell <10){$("#leftinfo").prepend("<p> Boss Is preparing a CRITICAL!</p>");setTimeout(critplayer,3000);}      
      else if (bosschoosespell < 12){castBloodDMGreduce();}
      else if (bosschoosespell < 14){castIceDMGreduce();}
      else if (bosschoosespell < 16){castFireDMGreduce();}
      else if (bosschoosespell < 18){castStormDMGreduce();}
      else if (bosschoosespell < 20){castNatureDMGreduce();}
      else if (bosschoosespell < 22){castHealPowreduce();}
      else if (bosschoosespell < 24){castShadowDMGreduce();}
      else if (bosschoosespell < 100){attackbasicplayer();}
    
    
    updatehealthbar();
  }




  function checkdeath(){

    if (currentbosshealth < 1) {
      battle=false;
      clearInterval(bossattack);
      clearInterval(checkdeath);
      currentbosshealth=boss.health;
      createitem();
      createitem();
      resetplayerstats();
      countplayerstats();
      currentplayerhealth = Health;
      currentplayermana = Mana;
      currentplayerhealth = Health;
      updatehealthbar();
      player.experience++;
     }

    if (currentplayerhealth < 1) {
      battle=false;
      clearInterval(bossattack);
      clearInterval(checkdeath);      
      resetplayerstats();
      countplayerstats();
      currentplayerhealth = Health;
      currentplayermana = Mana;
      currentplayerhealth = Health;
      currentbosshealth=boss.health;
      updatehealthbar();      
    }

    // so mana doesn't overflow..
    if (currentplayermana > Mana){currentplayermana=Mana};
    if (currentplayerhealth > Health){currentplayerHealth=Health};

    updatehealthbar();
  }


  var checkdeath=setInterval(checkdeath,1000);
  var bossattack=setInterval(bossattack,3000);


}




$("#summonfaster").click(function(){
if (player.summoninterval-6000 > 0){
player.summoninterval=player.summoninterval - 6000;
$("#summons").text("1 spawn per: "+Math.floor(player.summoninterval/6000)+"minutes");
}
});

$("#summonslower").click(function(){

player.summoninterval=player.summoninterval + 6000;
$("#summons").text("1 spawn per: "+Math.floor(player.summoninterval/6000)+"minutes");

});


$("#minus").click(function(){
if( boss.level > 1){
boss.level--;
$("#bosslevel").text("LVL: "+boss.level);
}
});

$("#plus").click(function(){
boss.level++;
$("#bosslevel").text("LVL: "+boss.level);
});

//inventory options
$(".slot").mousedown(function(e) {
  if (e.button == 2) {
     clickeditemid = this.id;
     $("#showdiv").css({
    'display': 'none'
  });
   $("#showdiv1").css({
    'display': 'none'
  });
    
    $("#showdiv").css({
      'top': mouseY,
      'left': mouseX,
      'display': 'block'
    });
  }
});

//inventory options
$(".spellbar").mousedown(function(e) {
  if (e.button == 2) {
     clickeditemid = this.id;
     $("#showdiv").css({
    'display': 'none'
  });
   $("#showdiv1").css({
    'display': 'none'
  });
    $("#desc").css({
      'top': top,
      'left': 0,
      'display': 'block'
    });
  }
});


$("#unequip").click(function() {

  for (var ff = 1; ff < 29; ff++) {
    var invcount1 = "i" + ff;
    var itemidcount1 = "#" + invcount1;

    if (jQuery.isEmptyObject(inventory[invcount1])) {
      $("#" + clickeditemid).children().appendTo(itemidcount1);
      ff = 50;
      inventory[invcount1] = player[clickeditemid];
      player[clickeditemid] = {};

    }
  }
  countplayerstats()

});

// closes all menus
$("#main").click(function() {
  $("#showdiv").css({
    'display': 'none'
  });
   $("#showdiv1").css({
    'display': 'none'
  });

    $("#desc").css({
    'display': 'none'
  });
   

});



$("#sell").click(function() {

  function sell() {
    
  // this is to stop bug when you click an empty inventory slot...  
  if (inventory[clickeditemid]["value"] != undefined && inventory[clickeditemid]["value"] != null){
  player.gold = player.gold + inventory[clickeditemid]["value"];
  $("#" + clickeditemid).empty();
  inventory[clickeditemid] = {};
}

}

  sell();
});
$("#equip").click(function() {

  function equip() {
    var equipslot = inventory[clickeditemid]["slot"];

    if ($.isEmptyObject(player[equipslot])) {
      $("#" + clickeditemid).children().appendTo("#" + equipslot);
      $("#" + clickeditemid).empty();
      // now to delete and transfer data
      player[equipslot] = inventory[clickeditemid];
      inventory[clickeditemid] = {};
    }
  }

  equip();
  countplayerstats();

});



$("#fightbutton").click(function(){

function startfightonclick(){
if (player.summons > 0 && battle != true ) {
player.summons--;
startfight();
}}
setTimeout(startfightonclick,5000);

});

//INVENTORY CLICK
$(".slot").click(function() {

  clickeditemid = this.id; // this selects the item id so it can be used for other things in the menu
 
  $('td').children().removeClass("selected");
  $("#" + clickeditemid).children().addClass("selected");

  $("#info").empty();
  $("#upgradeinfo").empty();
  for (var y = 0; y < affixes.length; y++) {
    var statstuff = inventory[clickeditemid]["stats"][affixes[y][0]];
    var upgradestatstuff = inventory[clickeditemid]["upgrade"]["stats"][affixes[y][0]];


    if (y === 0) {
      var namerarity = inventory[clickeditemid]["rarity"];
      var clickeditemname = inventory[clickeditemid]["name"];

      $("#info").append("<p class='" + namerarity + "'>" + clickeditemname + "</p><div class='line'></div>");
      $("#upgradeinfo").html("<p> Upgrade stats:</p>");
    }

    if (statstuff != undefined && statstuff[0]>0) {
      $("#info").append(
        "<p>" + affixes[y][0] + ": <span class='" + statstuff[2] + "'>" + statstuff[0] + "/" + statstuff[1] + "</span></p>"
      );
    }

    if (upgradestatstuff[0] != undefined && upgradestatstuff[0] >0) {
      $("#upgradeinfo").append(
        "<p>" + affixes[y][0] + ": <span class='" + upgradestatstuff[2] + "'>" + upgradestatstuff[0] + "/" + upgradestatstuff[1] + "</span></p>"
      );
   }

    if (y === affixes.length - 1) {
      $("#info").append("<p>Item Level: " + inventory[clickeditemid]["level"] + "</p>");
    }
  }
});

//CHARACTER CLICK
$(".slot1").click(function() {
  clickeditemid = this.id; // this selects the item id so it can be used for other things in the menu

  $('td').children().removeClass("selected");
  $("#" + clickeditemid).children().addClass("selected");

  $("#info").empty();
  for (var y = 0; y < affixes.length; y++) {
    var statstuff = player[clickeditemid]["stats"][affixes[y][0]];
    var upgradestatstuff = player[clickeditemid]["upgrade"]["stats"][affixes[y][0]];


    if (y === 0) {
      var namerarity = player[clickeditemid]["rarity"];
      var clickeditemname = player[clickeditemid]["name"];

      $("#info").append("<p class='" + namerarity + "'>" + clickeditemname + "</p><div class='line'></div>");
      $("#upgradeinfo").html("<p> Upgrade stats:</p>");
    }

    if (statstuff != undefined  && statstuff[0]>0) {
      $("#info").append(
        "<p>" + affixes[y][0] + ": <span class='" + statstuff[2] + "'>" + statstuff[0] + "/" + statstuff[1] + "</span></p>"
      );
    }
      if (upgradestatstuff[0] != undefined && upgradestatstuff[0] >0) {
      $("#upgradeinfo").append(
         "<p>" + affixes[y][0] + ": <span class='" + upgradestatstuff[2] + "'>" + upgradestatstuff[0] + "/" + upgradestatstuff[1] + "</span></p>"
      );
   }
    if (y === affixes.length - 1) {
      $("#info").append("<p>Item Level: " + player[clickeditemid]["level"] + "</p>");
    }
  }

});


// to unequip items
$(".slot1").mousedown(function(e) {
  if (e.button == 2) {
     clickeditemid = this.id;
     $("#showdiv").css({
    'display': 'none'
  });
   $("#showdiv1").css({
    'display': 'none'
  });
    $("#showdiv1").css({
      'top': mouseY,
      'left': mouseX,
      'display': 'block'
    });
  }
});


// keyboard spell clicking support! Woo :D
$('body').bind('keypress',function (event){
  console.log(player);
  if (event.keyCode === 49){$(".spell1").trigger('click');}
  if (event.keyCode === 50){$(".spell2").trigger('click');}
  if (event.keyCode === 51){$(".spell3").trigger('click');}
  if (event.keyCode === 52){$(".spell4").trigger('click');}
  if (event.keyCode === 53){$(".spell5").trigger('click');}
  if (event.keyCode === 54){$(".spell6").trigger('click');}
  if (event.keyCode === 55){$(".spell7").trigger('click');}
  if (event.keyCode === 56){$(".spell8").trigger('click');}
  if (event.keyCode === 57){$(".spell9").trigger('click');}
  if (event.keyCode === 58){$(".spell10").trigger('click');}
  if (event.keyCode === 59){$(".spell11").trigger('click');}
  if (event.keyCode === 60){$(".spell12").trigger('click');}
  if (event.keyCode === 61){$(".spell13").trigger('click');}
});



function resetplayerstats(){  
 buffHealth = 0;
 buffMana = 0;
 buffDodge = 0;
 buffMagicPow = 0;
 buffDamage = 0;
 buffIceDMG = 0;
 buffFireDMG = 0;
 buffStormDMG = 0;
 buffBloodDMG = 0;
 buffCritical = 0;
 buffShadowDMG = 0;
 buffNatureDMG = 0;
 nerfHealPow = 0;

 nerfHealth = 0;
 nerfMana = 0;
 nerfDodge = 0;
 nerfMagicPow = 0;
 nerfDamage = 0;
 nerfIceDMG = 0;
 nerfFireDMG = 0;
 nerfStormDMG = 0;
 nerfBloodDMG = 0;
 nerfCritical = 0;
 nerfShadowDMG = 0;
 nerfNatureDMG = 0;
 nerfHealPow = 0;   
}


function reloadeverything(){
   // we load inventory items
      for (var f = 1; f < 29; f++) {
      var invcount1 = "i" + f;
      var itemidcount1 = "#" + invcount1;
      var itemid1 = itemidcount1 + "S";
      if (jQuery.isEmptyObject(inventory[invcount1])===false) {
        var allclasses1 = "item sprite " + inventory[invcount1]["icon"] + " " + inventory[invcount1]['rarity'];
        $(itemidcount1).append("<img id='" + itemid1 + "'class='" + allclasses1 + "' '></img>");        
       
      }
    }
// we also load character items
   for (var x = 0; x <slotplayernames.length; x++) {
      var itemslot1= slotplayernames[x];
      var itemid1 = "#" + slotplayernames[x];
      var newid1="#c"+x;
     
     if (jQuery.isEmptyObject(player[itemslot1])===false) {
        var allclasses1 = "item sprite " + player[itemslot1]["icon"] + " " + player[itemslot1]['rarity'];
        $(itemid1).append("<img id='" +newid1+ "'class='" + allclasses1 + "' '></img>");        
       
      }
    }
  
  
}

function save() {  
  var save = {
    player1: player,
    inventory1: inventory, 
    boss1: boss,   
  }
  localStorage.setItem("save", JSON.stringify(save));
}

function load() {

  var savegame = JSON.parse(localStorage.getItem("save"));

  if (savegame != null && savegame != undefined){
  inventory = savegame.inventory1;
  player = savegame.player1;
  resetplayerstats();
  reloadeverything();
  countplayerstats();
  displaystats();  
  boss = savegame.boss1;
  setInterval(addsummon,player.summoninterval);
  $("#bosslevel").text("LVL: "+boss.level);
  $("#summons").text("1 spawn per: "+Math.floor(player.summoninterval/6000)+"minutes");
}


}

setInterval(save, 10000);

window.onload = function() {
  load();
  }


}); // doc rdy