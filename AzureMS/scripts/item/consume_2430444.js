
/*

    ���� �ҽ� ���� ��ũ��Ʈ �Դϴ�. (���� : Ƽ��)

    ���ǽþ��̵� : ?
    
    ���ǽ� �̸� : ������ ���

    ���ǽð� �ִ� �� : ?

    ���ǽ� ���� : 15���� ������


*/
importPackage(Packages.client.items);
var status = -1;

function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0) {
        cm.dispose();
    return;
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var leftslot = cm.getPlayer().getInventory(MapleInventoryType.EQUIP).getNumFreeSlot();
            if (leftslot < 9) {
                cm.sendOk("You need at least 9 spaces for inventory. Free up at least 9 spaces on the Equipment tab and reopen it.");
                cm.dispose();
                return;
            }
            
            switch (cm.getPlayer().getJob()) {
                case 100:
                case 1100:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040163, 1);
                        cm.gainItem(1060153, 1);
                    } else {
                        cm.gainItem(1051239, 1);

                    }
                    cm.gainItem(1003302, 1);
                    cm.gainItem(1072564, 1);
                    cm.gainItem(1082346, 1); 
                    cm.gainItem(1302183, 1);
                    cm.gainItem(1312079, 1);
                    cm.gainItem(1402120, 1);
                    cm.gainItem(1412078, 1);
                    cm.gainItem(1422080, 1);
                    break;
                case 2100:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040163, 1);
                        cm.gainItem(1060153, 1);
                    } else {
                        cm.gainItem(1051239, 1);

                    }
                    cm.gainItem(1003302, 1);
                    cm.gainItem(1072564, 1);
                    cm.gainItem(1082346, 1); 
                    cm.gainItem(1442145, 1); 
                    break;
                case 3100:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040163, 1);
                        cm.gainItem(1060153, 1);
                    } else {
                        cm.gainItem(1051239, 1);

                    }
                    cm.gainItem(1003302, 1);
                    cm.gainItem(1072564, 1);
                    cm.gainItem(1082346, 1); 
                    cm.gainItem(1312079, 1);
                    break;
                case 5100:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040163, 1);
                        cm.gainItem(1060153, 1);
                    } else {
                        cm.gainItem(1051239, 1);

                    }
                    cm.gainItem(1003302, 1);
                    cm.gainItem(1072564, 1);
                    cm.gainItem(1082346, 1); 
                    cm.gainItem(1302183, 1);
                    break;
                case 200:
                case 1200:
                case 2200:
                case 3200:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040167, 1);
                        cm.gainItem(1060156, 1);
                    } else {
                        cm.gainItem(1041169, 1);
                        cm.gainItem(1061179, 1);
                    }
                    cm.gainItem(1003303, 1);
                    cm.gainItem(1072565, 1);
                    cm.gainItem(1382133, 1);
                    cm.gainItem(1082347, 1);
                    break;
                case 300:
                case 1300:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040164, 1);
                        cm.gainItem(1061176, 1);
                    } else {
                        cm.gainItem(1041166, 1);
                        cm.gainItem(1072566, 1);
                    }
                    cm.gainItem(1003304, 1);
                    cm.gainItem(1082348, 1);
                    cm.gainItem(1072566, 1);
                    cm.gainItem(1452138, 1);
                    break;
                case 2300:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040164, 1);
                        cm.gainItem(1061176, 1);
                    } else {
                        cm.gainItem(1041166, 1);
                        cm.gainItem(1072566, 1);
                    }
                    cm.gainItem(1003304, 1);
                    cm.gainItem(1082348, 1);
                    cm.gainItem(1072566, 1);
                    cm.gainItem(1352000, 1);
                    cm.gainItem(1522029, 1);
                    break;
                case 3300:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040164, 1);
                        cm.gainItem(1061176, 1);
                    } else {
                        cm.gainItem(1041166, 1);
                        cm.gainItem(1072566, 1);
                    }
                    cm.gainItem(1003304, 1);
                    cm.gainItem(1082348, 1);
                    cm.gainItem(1072566, 1);
                    cm.gainItem(1462023, 1);
                    break;
                case 400:
                case 1400:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040165, 1);
                        cm.gainItem(1060154, 1);
                    } else {
                        cm.gainItem(1041167, 1);
                        cm.gainItem(1061177, 1);
                    }
                    cm.gainItem(1003305, 1);
                    cm.gainItem(1072567, 1);
                    if (cm.getPlayer().getKeyValue("dualBlade") == null)
                        cm.gainItem(1472150, 1);
                    break;
                case 2400:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040165, 1);
                        cm.gainItem(1060154, 1);
                    } else {
                        cm.gainItem(1041167, 1);
                        cm.gainItem(1061177, 1);
                    }
                    cm.gainItem(1003305, 1);
                    cm.gainItem(1072567, 1);
                    cm.gainItem(1362047, 1);
                    break;
                case 500:
		case 2500:
                    cm.gainItem(1003306, 1);
                    cm.gainItem(1052390, 1);
                    cm.gainItem(1072568, 1);
                    cm.gainItem(1082350, 1);
                    cm.gainItem(1482111, 1);
                    cm.gainItem(1492110, 1);
                    cm.gainItem(1353100, 1);
                    break;
                case 1500:
                case 3500:
                    cm.gainItem(1003306, 1);
                    cm.gainItem(1052390, 1);
                    cm.gainItem(1072568, 1);
                    cm.gainItem(1082350, 1);
                    cm.gainItem(1492110, 1);
                    break;
                case 501:
                    cm.gainItem(1003306, 1);
                    cm.gainItem(1052390, 1);
                    cm.gainItem(1072568, 1);
                    cm.gainItem(1082350, 1);
                    cm.gainItem(1532046, 1);
                    break;
                case 2700:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040167, 1);
                        cm.gainItem(1060156, 1);
                    } else {
                        cm.gainItem(1041169, 1);
                        cm.gainItem(1061179, 1);
                    }
                    cm.gainItem(1003303, 1);
                    cm.gainItem(1072565, 1);
                    cm.gainItem(1082347, 1);
                    break
                case 6100:
                    if (cm.getPlayer().getGender() == 0) {
                        cm.gainItem(1040163, 1);
                        cm.gainItem(1060153, 1);
                    } else {
                        cm.gainItem(1051239, 1);

                    }
                    cm.gainItem(1003302, 1);
                    cm.gainItem(1072564, 1);
                    cm.gainItem(1082346, 1); 
                    cm.gainItem(1402120, 1);
                    break;
                case 6500:
                    cm.gainItem(1003306, 1);
                    cm.gainItem(1052390, 1);
                    cm.gainItem(1072568, 1);
                    cm.gainItem(1082350, 1);
                    break;
                default:
                    cm.sendOk("You are not in a vocational level to receive equipment. If you are at a level where you can change your job, you can get your equipment after you change your job.");
                    cm.dispose();
                    return;
                    
            }
	    cm.gainItem(2430444,-1);
	    cm.dispose();
        }
    }
}