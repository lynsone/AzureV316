package scripting.NPC;

import java.util.ArrayList;
import java.util.List;

import client.MapleClient;
import connections.Packets.MainPacketCreator;
import tools.Pair;

public class setScriptableNPC {

    private static List<Pair<Integer, String>> npcs = new ArrayList<Pair<Integer, String>>();

    public static void load() {
        npcs.add(new Pair<Integer, String>(1033221, "���� �����ּ���~��")); // ������� �ﷹ��
        npcs.add(new Pair<Integer, String>(1012107, "�ȳ��ϼ���~")); // ��Ÿ...
        npcs.add(new Pair<Integer, String>(1012102, "��ǳ���� ĳ�÷� ��ȯ�ϰ� �;��.")); // �Ǿ�
        npcs.add(new Pair<Integer, String>(2144016, "��ų�� �ް� �;��.")); // �ð��� ���� ����

        npcs.add(new Pair<Integer, String>(9001001, "1")); //
        npcs.add(new Pair<Integer, String>(9001002, "2")); //
        npcs.add(new Pair<Integer, String>(9001005, "3")); //
    }

    public static void sendPacket(MapleClient ha) {
        ha.send(MainPacketCreator.setNPCScriptable(npcs));
    }

}