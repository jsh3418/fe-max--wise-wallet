export const getDeletePaymentModalTemplate = (payment) => `
<div class="modal-overlay"></div>
<div class="modal-content">
  <h2 class="modal-title">해당 결제수단을 삭제하시겠습니까?</h2>
  <div class="modal-content-text">${payment}</div>
  <div class="modal-button-container">
    <button class="modal-cancel-button" aria-label="Close modal">취소</button>
    <button class="modal-confirm-button" aria-label="Confirm">삭제</button>
  </div>
</div>
`;
