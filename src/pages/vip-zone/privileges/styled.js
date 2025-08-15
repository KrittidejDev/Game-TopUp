import styled from 'styled-components';

export const PrivilegesContainer = styled.div`
 
  .filter_tabs_container {
  }

  .filter_tabs_row {
    display: flex;
    gap: 2px;
    width: fit-content;
  }

  .filter_tab {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    position: relative;

    &:hover {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #ff3366;
      }
    }

    &.active {
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #ff3366;
      }
    }

    .tier_icon {
      display: flex;
      align-items: center;
      

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .membership_display {
    max-width: 800px;
  }

  .membership_card {
    border-radius: 12px;
    padding: 24px;
  }

  .benefit_section {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .benefit_header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;

    .benefit_icon {
      width: 24px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        
        object-fit: contain;
      }
    }

    .benefit_title {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S28};
      font-weight: 500;
    }
  }

  .benefit_description {
    line-height: 1.5;
    padding-left: 36px;
    font-weight: 100;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20}
  }

  .benefit_item {
    line-height: 1.6;
    padding-left: 36px;
    margin-bottom: 8px;
    position: relative;
    font-weight: 100;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    

    &:before {
      content: "•";
      font-weight: bold;
      position: absolute;
      left: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 16px;

    .filter_tabs_row {
      flex-wrap: wrap;
      width: 100%;
    }

    .filter_tab {
      flex: 1;
      justify-content: center;
      min-width: 120px;
      padding: 10px 12px;
    }

    .membership_card {
      padding: 20px;
    }

    .benefit_description,
    .benefit_item {
      padding-left: 32px;
    }

    .benefit_item:before {
      left: 16px;
    }
  }

  @media (max-width: 480px) {
    .filter_tabs_row {
      flex-direction: column;
      gap: 4px;
    }

    .filter_tab {
      justify-content: flex-start;
      width: 100%;
      min-width: auto;
    }
  }
  .follow_announcement {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-weight: 100;
    margin-left: 8px;

   
  }
`;

// Helper function to get tier colors
