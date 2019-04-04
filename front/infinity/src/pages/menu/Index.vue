<template>
  <div class="row grid-margin">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">Basic Table</h4>
          <p class="card-description">A basic example of js-grid</p>
          <div
            id="js-grid"
            class="pt-3 jsgrid"
            style="position: relative; height: 516px; width: 100%;"
          >
            <div class="jsgrid-grid-header jsgrid-header-scrollbar">
              <table class="jsgrid-table">
                <tr class="jsgrid-header-row">
                  <th class="jsgrid-header-cell jsgrid-header-sortable" style="width: 150px;">Name</th>
                  <th
                    class="jsgrid-header-cell jsgrid-align-right jsgrid-header-sortable"
                    style="width: 50px;"
                  >Age</th>
                  <th
                    class="jsgrid-header-cell jsgrid-header-sortable"
                    style="width: 200px;"
                  >Address</th>
                  <th
                    class="jsgrid-header-cell jsgrid-align-center jsgrid-header-sortable"
                    style="width: 100px;"
                  >Country</th>
                  <th
                    class="jsgrid-header-cell jsgrid-header-sortable"
                    style="width: 100px;"
                  >Is Married</th>
                  <th
                    class="jsgrid-header-cell jsgrid-control-field jsgrid-align-center"
                    style="width: 50px;"
                  >
                    <input
                      class="jsgrid-button jsgrid-mode-button jsgrid-search-mode-button"
                      type="button"
                      title="Switch to searching"
                    >
                  </th>
                </tr>
                <tr class="jsgrid-filter-row" style="display: none;">
                  <td class="jsgrid-cell" style="width: 150px;">
                    <input type="text">
                  </td>
                  <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">
                    <input type="number">
                  </td>
                  <td class="jsgrid-cell" style="width: 200px;">
                    <input type="text">
                  </td>
                  <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">
                    <select>
                      <option value="0"></option>
                      <option value="1">United States</option>
                      <option value="2">Canada</option>
                      <option value="3">United Kingdom</option>
                      <option value="4">France</option>
                      <option value="5">Brazil</option>
                      <option value="6">China</option>
                      <option value="7">Russia</option>
                    </select>
                  </td>
                  <td class="jsgrid-cell" style="width: 100px;"></td>
                  <td
                    class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                    style="width: 50px;"
                  >
                    <input class="jsgrid-button jsgrid-search-button" type="button" title="Search">
                    <input
                      class="jsgrid-button jsgrid-clear-filter-button"
                      type="button"
                      title="Clear filter"
                    >
                  </td>
                </tr>
                <tr class="jsgrid-insert-row">
                  <td class="jsgrid-cell" style="width: 150px;">
                    <input type="text">
                  </td>
                  <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">
                    <input type="number">
                  </td>
                  <td class="jsgrid-cell" style="width: 200px;">
                    <input type="text">
                  </td>
                  <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">
                    <select>
                      <option value="0"></option>
                      <option value="1">United States</option>
                      <option value="2">Canada</option>
                      <option value="3">United Kingdom</option>
                      <option value="4">France</option>
                      <option value="5">Brazil</option>
                      <option value="6">China</option>
                      <option value="7">Russia</option>
                    </select>
                  </td>
                  <td class="jsgrid-cell" style="width: 100px;"></td>
                  <td
                    class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                    style="width: 50px;"
                  >
                    <input class="jsgrid-button jsgrid-insert-button" type="button" title="Insert">
                  </td>
                </tr>
              </table>
            </div>
            <div class="jsgrid-grid-body" style="height: 304.625px;">
              <table class="jsgrid-table">
                <tbody>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Brody Potts</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">59</td>
                    <td class="jsgrid-cell" style="width: 200px;">Ap #577-7690 Sem Road</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Canada</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Dillon Ford</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">60</td>
                    <td class="jsgrid-cell" style="width: 200px;">Ap #885-9289 A, Av.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">United States</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Hannah Juarez</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">61</td>
                    <td class="jsgrid-cell" style="width: 200px;">4744 Sapien, Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Canada</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Vincent Shaffer</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">25</td>
                    <td class="jsgrid-cell" style="width: 200px;">9203 Nunc St.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Canada</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">George Holt</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">27</td>
                    <td class="jsgrid-cell" style="width: 200px;">4162 Cras Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">China</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Tobias Bartlett</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">74</td>
                    <td class="jsgrid-cell" style="width: 200px;">792-6145 Mauris St.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">France</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Xavier Hooper</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">35</td>
                    <td class="jsgrid-cell" style="width: 200px;">879-5026 Interdum. Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">United States</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Declan Dorsey</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">31</td>
                    <td class="jsgrid-cell" style="width: 200px;">Ap #926-4171 Aenean Road</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Canada</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Clementine Tran</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">43</td>
                    <td class="jsgrid-cell" style="width: 200px;">P.O. Box 176, 9865 Eu Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">France</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Pamela Moody</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">55</td>
                    <td class="jsgrid-cell" style="width: 200px;">622-6233 Luctus Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">China</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Julie Leon</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">43</td>
                    <td class="jsgrid-cell" style="width: 200px;">Ap #915-6782 Sem Av.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">China</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Shana Nolan</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">79</td>
                    <td class="jsgrid-cell" style="width: 200px;">P.O. Box 603, 899 Eu St.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Brazil</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Vaughan Moody</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">37</td>
                    <td class="jsgrid-cell" style="width: 200px;">880 Erat Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">Brazil</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-alt-row">
                    <td class="jsgrid-cell" style="width: 150px;">Randall Reeves</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">44</td>
                    <td class="jsgrid-cell" style="width: 200px;">1819 Non Street</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">United Kingdom</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                  <tr class="jsgrid-row">
                    <td class="jsgrid-cell" style="width: 150px;">Dominic Raymond</td>
                    <td class="jsgrid-cell jsgrid-align-right" style="width: 50px;">68</td>
                    <td class="jsgrid-cell" style="width: 200px;">Ap #689-4874 Nisi Rd.</td>
                    <td class="jsgrid-cell jsgrid-align-center" style="width: 100px;">United States</td>
                    <td class="jsgrid-cell" style="width: 100px;">
                      <div class="form-check mt-0">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked="checked">
                          <i class="input-helper"></i>
                        </label>
                      </div>
                    </td>
                    <td
                      class="jsgrid-cell jsgrid-control-field jsgrid-align-center"
                      style="width: 50px;"
                    >
                      <input class="jsgrid-button jsgrid-edit-button" type="button" title="Edit">
                      <input
                        class="jsgrid-button jsgrid-delete-button"
                        type="button"
                        title="Delete"
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="jsgrid-pager-container">
              <div class="jsgrid-pager">
                Pages:
                <span class="jsgrid-pager-nav-button">
                  <a href="javascript:void(0);">First</a>
                </span>
                <span class="jsgrid-pager-nav-button">
                  <a href="javascript:void(0);">Prev</a>
                </span>
                <span class="jsgrid-pager-page">
                  <a href="javascript:void(0);">1</a>
                </span>
                <span class="jsgrid-pager-page">
                  <a href="javascript:void(0);">2</a>
                </span>
                <span class="jsgrid-pager-page">
                  <a href="javascript:void(0);">3</a>
                </span>
                <span class="jsgrid-pager-page">
                  <a href="javascript:void(0);">4</a>
                </span>
                <span class="jsgrid-pager-page jsgrid-pager-current-page">5</span>
                <span class="jsgrid-pager-nav-button">
                  <a href="javascript:void(0);">...</a>
                </span>
                <span class="jsgrid-pager-nav-button">
                  <a href="javascript:void(0);">Next</a>
                </span>
                <span class="jsgrid-pager-nav-button">
                  <a href="javascript:void(0);">Last</a>
                </span> &nbsp;&nbsp; 5 of 7
              </div>
            </div>
            <div
              class="jsgrid-load-shader"
              style="display: none; position: absolute; top: 0px; right: 0px; bottom: 0px; left: 0px; z-index: 1000;"
            ></div>
            <div
              class="jsgrid-load-panel"
              style="display: none; position: absolute; top: 50%; left: 50%; z-index: 1000;"
            >Please, wait...</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
