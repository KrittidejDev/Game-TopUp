import styled from "styled-components";

export const PrivilegesContainer= styled.div`
  
  
  
  .filter_wrap {
    margin-bottom: 32px;
  }
  
  .filter_btn_row {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }
  
  .filter_btn {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 600;
    color: #cccccc;
    min-width: 120px;
    justify-content: space-between;
    
    &.active {
      background: transparent;
      border-bottom-color: #ff4757;
      color: #ffffff;
    }
    
    .tier_icon {
      margin-left: 8px;
      display: flex;
      align-items: center;
      
      
    }
    
    &.active .tier_icon img {
      opacity: 1;
    }
  }
  
  .membership_display {
    border-radius: 16px;
    padding: 24px;
  }
  
  .membership_card {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  
  .benefit_section {
    border-radius: 12px;
    padding: 20px;
    border-left: 4px solid transparent;
    
   
  }
  
  .benefit_header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    gap: 12px;
  }
  
  .benefit_icon {
    
    flex-shrink: 0;
  }
  
  .benefit_title {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    line-height: 1.4;
  }
  
  .benefit_description {
    font-size: 14px;
    color: #cccccc;
    line-height: 1.5;
    margin-left: 36px;
  }
  
  .benefit_item {
    font-size: 14px;
    color: #cccccc;
    line-height: 1.5;
    margin-left: 36px;
    margin-bottom: 8px;
    position: relative;
    
    &:before {
      content: '•';
      color: #ff6b9d;
      margin-right: 8px;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    padding: 16px;
    
    .filter_btn_row {
      flex-wrap: wrap;
      gap: 6px;
    }
    
    .filter_btn {
      min-width: 100px;
      padding: 10px 16px;
      font-size: 13px;
    }
    
    .membership_display {
      padding: 16px;
    }
    
    .benefit_section {
      padding: 16px;
    }
    
    .benefit_title {
      font-size: 15px;
    }
    
    .benefit_description,
    .benefit_item {
      font-size: 13px;
      margin-left: 32px;
    }
  }
  
  @media (max-width: 480px) {
    .filter_btn_row {
      flex-direction: column;
    }
    
    .filter_btn {
      min-width: 100%;
      justify-content: center;
    }
    
    .tier_icon {
      margin-left: 12px;
    }
  }
`