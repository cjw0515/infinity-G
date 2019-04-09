<template>
  <div>
    <table-paging
      col-size="7"
      :table-data="menus"
      table-name="메뉴관리"
      :thead-names="tableTheadNames"
      :delete-function="delRowData"
      :modify-function="modRowData"
    ></table-paging>    
    <div class="col-md-6 col-xl-4 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Varying Modal Content</h4>
          <div
            class="modal fade"
            id="exampleModal-4"
            tabindex="-1"
            role="dialog"
            aria-labelledby="ModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="ModalLabel">모달 테스트</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form
                    class="cmxform"
                    id="commentForm"
                    method="get"
                    action="#"
                    novalidate="novalidate"
                  >
                    <fieldset>
                      <div class="form-group has-danger">
                        <label for="cname">Name (required, at least 2 characters)</label>
                        <input
                          id="cname"
                          class="form-control form-control-danger"
                          name="name"
                          minlength="2"
                          type="text"
                          required
                          aria-invalid="true"
                        >
                        <label
                          id="cname-error"
                          class="error mt-2 text-danger"
                          for="cname"
                        >Please enter at least 2 characters.</label>
                      </div>
                      <div class="form-group has-danger">
                        <label for="cemail">E-Mail (required)</label>
                        <input
                          id="cemail"
                          class="form-control form-control-danger"
                          type="email"
                          name="email"
                          required
                          aria-invalid="true"
                        >
                        <label
                          id="cemail-error"
                          class="error mt-2 text-danger"
                          for="cemail"
                        >Please enter a valid email address.</label>
                      </div>
                      <div class="form-group has-danger">
                        <label for="curl">URL (optional)</label>
                        <input
                          id="curl"
                          class="form-control form-control-danger"
                          type="url"
                          name="url"
                          aria-invalid="true"
                        >
                        <label
                          id="curl-error"
                          class="error mt-2 text-danger"
                          for="curl"
                        >Please enter a valid URL.</label>
                      </div>
                      <div class="form-group">
                        <label for="ccomment">Your comment (required)</label>
                        <textarea
                          id="ccomment"
                          class="form-control valid"
                          name="comment"
                          required
                          aria-invalid="false"
                        ></textarea>
                      </div>
                      <input class="btn btn-primary" type="submit" value="Submit">
                    </fieldset>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-success">Send message</button>
                  <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-info"
            data-toggle="modal"
            data-target="#exampleModal-4"
            data-whatever="@mdo"
          >Open modal for @mdo</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { utils } from "@/components/mixins/utils";
import TableWithPaging from "@/components/table/TableWithPaging.vue";
import { LIST } from "@/api/menus/";

export default {
  data() {
    return {
      menus: [],
      tableTheadNames: ["메뉴이름", "link", "아이콘", "2depth"]
    };
  },
  methods: {
    async getMenuList() {
      let apiUrl = LIST;
      const response = await fetch(apiUrl);
      const json = await response.json();
      return json.menus;
    },
    modRowData() {
      alert("mod");
    },
    delRowData() {
      alert("del");
    }
  },
  components: {
    "table-paging": TableWithPaging
  },
  mounted: function() {
    this.getMenuList()
      .then(data => {
        this.menus = data;
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
