<template>
  <div
    class="modal fade"
    :id="modalOptions.modalId"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">{{modalOptions.modalName}}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot name="modalBody"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modalFooter"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalOptions: {
      type: Object,
      default: () => ({
        modalName: "모달 제목",
        modalId: "defaultModal"
      })
    }
  }
};
</script>
