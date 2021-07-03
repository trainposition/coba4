var colorMappings = {
    petak: {
     '0': {
            text: 'Petak Lempuyangan (LPN) - Yogyakarta (YK)',
            color: '#6e2727'
        },
        '1': {
            text: 'Petak Yogyakarta (YK) - Patukan (PTN)',
            color: '#806666'
        },
        '2': {
            text: 'Petak Patukan (PTN) - Rewulu (RWL)',
            color: '#ccc6c6'
        },
        '3': {
            text: 'Petak Rewulu (RWL) - Sentolo (STL)',
            color: '#474646'
        },
        '4': {
            text: 'Petak Sentolo (STL) - Wates (WT)',
            color: '#f08a3c'
        },
        '5': {
            text: 'Petak Wates (WT) - Wojo (WJ)',
            color: '#ba5507'
        },
        '6': {
            text: 'Petak Wojo (WJ) - Jenar (J)',
            color: '#f7710a'
        },
        '7': {
            text: 'Petak Jenar (JN) - Kutoarjo (KTA)',
            color: '#e8b461'
        },
        '8': {
            text: 'Petak Kutoarjo (KTA) - Butuh (BTH)',
            color: '#945d06'
        },
        '9': {
            text: 'Petak Butuh (BTH) - Prembun (PRB)',
            color: '#e89717'
        },
        '10': {
            text: 'Petak Prembun (PRB) - Kutowinangun (KWN)',
            color: '#ff9c00'
        },
        '11': {
            text: 'Petak Kutowinangun (KWN) - Wonosari (WNS)',
            color: '#ffeb6b'
        },
        '12': {
            text: 'Petak Wonosari (WNS) - Kebumen (KM) ',
            color: '#9c8702'
        },
        '13': {
            text: 'Petak Kebumen (KM) - Soka (SOA)',
            color: '#dbc118'
        },
        '14': {
            text: 'Petak Soka (SOA) - Sruweng (SRW)',
            color: '#fad902'
        },
        '15': {
            text: 'Petak Sruweng (SRW) - Karanganyar (KA)',
            color: '#e3f75e'
        },
        '16': {
            text: 'Petak Karanganyar (KA) - Gombong (GB)',
            color: '#889c03'
        },
        '17': {
            text: 'Petak Gombong (GB) - Ijo (IJ)',
            color: '#c3db1f'
        },
        '18': {
            text: 'Petak Ijo (IJ) - Tambak (TBK)',
            color: '#deff00'
        },
        '19': {
            text: 'Petak Tambak (TBK) - Sumpiuh (SPH)',
            color: '#c5fa69'
        },
        '20': {
            text: 'Petak Sumpiuh (SPH) - Kemrajen (KJ)',
            color: '#2a4200'
        },
        '21': {
            text: 'Petak Kemrajen (KJ) - Kroya (KYA)',
            color: '#5b8f01'
        },
        '22': {
            text: 'Petak Kroya (KYA) - Randegan (RDN)',
            color: '#91bf41'
        },
        '23': {
            text: 'Petak Randegan (RDN) - Kebasen (KBS)',
            color: '#a2ff00'
        },
        '24': {
            text: 'Petak Kebasen (KBS) - Notog (NTG)',
            color: '#b5fc7e'
        },
        '25': {
            text: 'Petak Notog (NTG) - Purwokerto (PWT)',
            color: '#1f4700'
        },
        '26': {
            text: 'Petak Purwokerto (PWT) - Karanggandul (KGD)',
            color: '#347800'
        },
        '27': {
            text: 'Petak Karanggandul (KGD) - Karangsari (KRR)',
            color: '#7cd13b'
        },
        '28': {
            text: 'Petak Karangsari (KRR) - Patuguran (PAT)',
            color: '#55c400'
        },
        '29': {
            text: 'Petak Patuguran (PAT) - Kretek (KRT)',
            color: '#70ff03'
        },
        '30': {
            text: 'Petak Kretek (KRT) - Bumiayu (BMA)',
            color: '#99ffb4'
        },
        '31': {
            text: 'Petak Bumiayu (BMA) - Linggapura (LG)',
            color: '#69ff90'
        },
        '32': {
            text: 'Petak Linggapura (LG) - Prupuk (PPK)',
            color: '#4fff7d'
        },
        '33': {
            text: 'Petak Prupuk (PPK) - Songgom (SGG)',
            color: '#a3ffe3'
        },
        '34': {
            text: 'Petak Songgom (SGG) - Larangan (LRA)',
            color: '#5cffcd'
        },
        '35': {
            text: 'Petak Larangan (LRA) - Ketanggungan (KGG)',
            color: '#004a33'
        },
        '36': {
            text: 'Petak Ketanggungan (KGG) - Ciledug (CLD)',
            color: '#6e968a'
        },
        '37': {
            text: 'Petak Ciledug (CLD) - Sindanglaut (SDU)',
            color: '#359c7d'
        },
        '38': {
            text: 'Petak Sindanglaut (SDU) - Luwung (LWG)',
            color: '#21dba3'
        },
        '39': {
            text: 'Petak Luwung (LWG) - Cirebon Prujakan (CNP)',
            color: '#00ffb2'
        },
        '40': {
            text: 'Petak Cirebon Prujakan (CNP) - Cirebon (CN)',
            color: '#579db3'
        },
        '41': {
            text: 'Petak Cirebon (CN) - Cangkring (CNK)',
            color: '#61d9ff'
        },
        '42': {
            text: 'Petak Cangkring (CNK) - Bangoduwa (BDW)',
            color: '#2988a6'
        },
        '43': {
            text: 'Petak Bangoduwa (BDW) - Arjawinangun (AWN)',
            color: '#003445'
        },
        '44': {
            text: 'Petak Arjawinangun (AWN) - Kertasemaya (KTM)',
            color: '#00688a'
        },
        '45': {
            text: 'Petak Kertasemaya (KTM) - Jatibarang (JTB)',
            color: '#0098c9'
        },
        '46': {
            text: 'Petak Jatibarang (JTB) - Telagasari (TLS)',
            color: '#03c1ff'
        },
        '47': {
            text: 'Petak Telagasari (TLS) - Terisi (TIS)',
            color: '#1f4700'
        },
        '48': {
            text: 'Petak Terisi (TIS) - Kadokangabus (KAB)',
            color: '#003566'
        },
        '49': {
            text: 'Petak Kadokangabus (KAB) - Cilegeh (CLH)',
            color: '#005aad'
        },
        '50': {
            text: 'Petak Cilegeh (CLH) - Haurgeulis (HGL)',
            color: '#52acff'
        },
        '51': {
            text: 'Petak Haurgeulis (HGL) - Cipunegara (CRA)',
            color: '#8cc8ff'
        },
        '52': {
            text: 'Petak Cipunegara (CRA) - Pegadenbaru (PGB)',
            color: '#408acf'
        },
        '53': {
            text: 'Petak Pegadenbaru (PGB) - Cikaum (CKM)',
            color: '#0084ff'
        },
        '54': {
            text: 'Petak Cikaum (CKM) - Pasirbungur (PAS)',
            color: '#000c52'
        },
        '55': {
            text: 'Petak Pasirbungur (PAS) - Pringkasap (PRI)',
            color: '#00179c'
        },
        '56': {
            text: 'Petak Pringkasap (PRI) - Pabuaran (PAB)',
            color: '#0026ff'
        },
        '57': {
            text: 'Petak Pabuaran (PAB) - Tanjungrasa (TJS)',
            color: '#526bff'
        },
        '58': {
            text: 'Petak Tanjungrasa (TJS) - Cikampek (CKP)',
            color: '#b8c2ff'
        },
        '59': {
            text: 'Petak Cikampek (CKP) - Dawuan (DWN)',
            color: '#590050'
        },
        '60': {
            text: 'Petak Dawuan (DWN) - Kosambi (KOS)',
            color: '#99008a'
        },
        '61': {
            text: 'Petak Kosambi (KOS) - Klari (KLI)',
            color: '#de00c8'
        },
        '62': {
            text: 'Petak Klari (KLI) - Karawang (KW)',
            color: '#ff00e6'
        },
        '63': {
            text: 'Petak Karawang (KW) - Kedunggedeh (KDH)',
            color: '#ff47ed'
        },
        '64': {
            text: 'Petak Kedunggedeh (KDH) - Lemahabang (LMB)',
            color: '#2988a6'
        },
        '65': {
            text: 'Petak Lemahabang (LMB) - Cikarang (CKR)',
            color: '#ffa6f6'
        },
        '66': {
            text: 'Petak Cikarang (CKR) - Tambun (TB)',
            color: '#5c000e'
        },
        '67': {
            text: 'Petak Tambun (TB) - Bekasi (BKS)',
            color: '#910016'
        },
        '68': {
            text: 'Petak Bekasi (BKS) - Cakung (CUK)',
            color: '#d90021'
        },
        '69': {
            text: 'Petak Cakung (CUK) - Jatinegara (JNG)',
            color: '#ff0000'
        }
    }
};