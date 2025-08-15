import styled from "styled-components";

export const VipZoneContainer = styled.div`
    width: 100%;
    padding: 60px 0px;
  .vip_zone{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    .vip_zone_header{
      .vip_zone_line{
        font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
        font-weight: 700;
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .vip_zone_content{
      font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .vip_zone_content_title{
        font-weight: 500;
      }
      .vip_zone_content_subtitle{
        font-weight: 100;
        text-align: center;
        font-size: ${({ theme }) => theme.FONTS.SIZES.S20}
      }
    }
    .vip_zone_main{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      .top_up_privileges{
        display: flex;
        flex-direction: column;
        .top_up_privileges_title{
          font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
          font-weight: 500;
        }
      }
      .vip_zone_benefits{
        .vip_zone_benefits_title{
          font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
          font-weight: 500;
        }
        .vip_zone_benefits_subtitle{
          font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
          font-weight: 100;
          margin-bottom: 30px;
        }
      }
      .vip_zone_levels{
        .vip_zone_levels_title{
          font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
          font-weight: 500;
        }
        .vip_levels{
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px 0;
          .vip_level{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between; // เปลี่ยนจาก start เป็น space-between
            padding: 16px 20px; // เพิ่ม padding
            background-color: #2a2a2a; // พื้นหลังสีเข้ม
            border-radius: 12px; // มุมโค้ง
            border: 1px solid #3a3a3a; // เส้นขอบ
            margin-bottom: 0; // เอาออกเพราะใช้ gap แทน
            transition: all 0.2s ease; // เอฟเฟกต์การเปลี่ยนแปลง
            cursor: pointer; // เพิ่ม cursor pointer
            position: relative;
            overflow: hidden;
            &:hover {
              background-color: #333333;
              border-color: #4a4a4a;
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            img{
              width: 40px; // ลดขนาดลงเล็กน้อย
              height: 40px;
              margin-right: 12px; // เพิ่มระยะห่าง
              border-radius: 50%; // ทำให้เป็นวงกลม
              object-fit: cover;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); // เงา
            }
            span{
              font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
              font-weight: 500;
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
`;
