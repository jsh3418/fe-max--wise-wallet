export const getAddPaymentModalTemplate = () => `
<div class="modal-overlay"></div>
<div class="modal-content">
  <h2 class="modal-title">추가하실 결제수단을 적어주세요.</h2>
  <input class="modal-content-input" type="text" placeholder="입력하세요" />
  <div class="modal-button-container">
    <button class="modal-cancel-button" aria-label="Close modal">취소</button>
    <button class="modal-add-confirm-button" aria-label="Confirm">등록</button>
  </div>
</div>
`;

export const getPaymentListTemplate = (value) => `
<span>${value}</span>
<img class="payment-dropdown__list-delete" src="/src/assets/delete-icon.svg" />
`;
