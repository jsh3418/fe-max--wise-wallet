import { CATEGORIES } from "../../constants/CATEGORIES.js";
import { TRANSACTION_TYPE } from "../../constants/TRANSACTION_TYPE.js";

export const getDeleteTransactionModalTemplate = ({ transactionType, category, memo, payment, price }) => `
<div class="modal-overlay"></div>
<div class="modal-content">
  <h2 class="modal-title">아래 내역을 삭제하시겠습니까?</h2>
  <div class="modal-content-delete-text">
    <div>카테고리: ${transactionType === TRANSACTION_TYPE.EXPENDITURE ? "지출" : "수입"} / ${CATEGORIES[transactionType][category]}</div>
    <div>내용: ${memo}</div>
    <div>결제수단: ${payment}</div>
    <div>금액: ${price.toLocaleString()}원</div>
  </div>
  <div class="modal-button-container">
    <button class="modal-cancel-button" aria-label="Close modal">취소</button>
    <button class="modal-confirm-button" aria-label="Confirm">삭제</button>
  </div>
</div>
`;
