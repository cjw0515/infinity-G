<template>
  <div>
    <div class="row">
      <div class="col-lg-5 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Hoverable Table</h4>
            <p class="card-description">
              Add class
              <code>.table-hover</code>
            </p>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Product</th>
                    <th>Sale</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jacob</td>
                    <td>Photoshop</td>
                    <td class="text-danger">
                      28.76%
                      <i class="ti-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-danger">Pending</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Messsy</td>
                    <td>Flash</td>
                    <td class="text-danger">
                      21.06%
                      <i class="ti-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                  <tr>
                    <td>John</td>
                    <td>Premier</td>
                    <td class="text-danger">
                      35.00%
                      <i class="ti-arrow-down"></i>
                    </td>
                    <td>
                      <label class="badge badge-info">Fixed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Peter</td>
                    <td>After effects</td>
                    <td class="text-success">
                      82.00%
                      <i class="ti-arrow-up"></i>
                    </td>
                    <td>
                      <label class="badge badge-success">Completed</label>
                    </td>
                  </tr>
                  <tr>
                    <td>Dave</td>
                    <td>53275535</td>
                    <td class="text-success">
                      98.05%
                      <i class="ti-arrow-up"></i>
                    </td>
                    <td>
                      <label class="badge badge-warning">In progress</label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <nav>
                <ul
                  class="pagination flex-wrap pagination-rounded-flat pagination-success justify-content-center"
                >
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="ti-angle-left"></i>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">3</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">4</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row grid-margin">
      <div class="col-lg-5">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Basic form validation</h4>
            <form class="cmxform" id="commentForm" method="get" action="#" novalidate="novalidate">
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
        </div>
      </div>
    </div>
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
                  <h5 class="modal-title" id="ModalLabel">New message</h5>
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

export default {
  data() {
    return {};
  },
  mounted: function() {}
};
</script>
