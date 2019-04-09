<template>
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
        <label id="curl-error" class="error mt-2 text-danger" for="curl">Please enter a valid URL.</label>
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
    </fieldset>
  </form>
</template>
<script>
export default {};
</script>
