<template>
  <div class="card-body">
    <form class="cmxform" id="commentForm" method="get" action="#">
      <fieldset v-if="validationFormOptions.inputEles.length > 0">
        <validation-input
          v-for="( valInput, index ) in validationFormOptions.inputEles"
          :key="index"
          :input-ele="valInput"
        ></validation-input>
      </fieldset>
    </form>
    <button
      type="button"
      @click="validationFormOptions.buttonEle.handleClick()"
      class="btn btn-success"
    >{{validationFormOptions.buttonEle.buttonName}}</button>
    <button type="button" class="btn btn-light" data-dismiss="modal">닫기</button>
  </div>
</template>
<script>
import ValidationInput from "./ValidationInput.vue";

export default {
  data() {
    return {};
  },
  components: {
    "validation-input": ValidationInput
  },
  props: {
    validationFormOptions: {
      type: Object,
      default: () => ({
        rules: {},
        messages: {},
        inputEles: [],
        buttonEle: {
          buttonName: "수정",
          handleClick: () => {
            alert("handleclick");
          }
        }
      })
    }
  },
  mounted: function() {
    let validator = $("#commentForm").validate({
      rules: {
        menuName: {
          required: true,
          minlength: 2
        },
        menuUrl: {
          required: true,
          minlength: 2
        },
        menuIcon: {
          required: true,
          minlength: 2
        },
        menuDepth: {
          required: true,
          minlength: 2
        }
        // confirm_password: {
        //   required: true,
        //   minlength: 5,
        //   equalTo: "#password"
        // },
      },
      messages: {
        menuName: {
          required: "메뉴 이름은 필수 항목입니다.",
          minlength: "2글자 이상 입력하셔야 합니다."
        },
        menuUrl: {
          required: "menuUrl은 필수 항목입니다.",
          minlength: "2글자 이상 입력하셔야 합니다."
        },
        menuIcon: {
          required: "menuIcon은 필수 항목입니다.",
          minlength: "2글자 이상 입력하셔야 합니다."
        },
        menuDepth: {
          required: "menuDepth은 필수 항목입니다.",
          minlength: "2글자 이상 입력하셔야 합니다."
        }
      },
      errorPlacement: function(label, element) {
        label.addClass("mt-2 text-danger");
        label.insertAfter(element);
      },
      highlight: function(element, errorClass) {
        $(element)
          .parent()
          .addClass("has-danger");
        $(element).addClass("form-control-danger");
      }
    });

    console.log(validator);
  }
};
</script>
