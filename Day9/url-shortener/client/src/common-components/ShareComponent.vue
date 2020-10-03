<template>
  <div class="share-components">
    <p>Share via:</p>
    <social-sharing :url="url" inline-template>
      <div class="share-comp">
        <network network="facebook" class="fbClass">
          <i class="fa fa-fw fa-facebook"></i> Facebook
        </network>
        <network network="linkedin" class="linkedClass">
          <i class="fa fa-fw fa-linkedin"></i> LinkedIn
        </network>
        <network network="twitter" class="twittClass">
          <i class="fa fa-fw fa-twitter"></i> Twitter
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
export default {
  name: "ShareComponent",
  props: ["url"]
};
</script>
<style lang="scss">
.share-components {
  .share-comp {
    span {
      margin-right: 10px;
      display: inline-block;
      padding: 4px 18px;
      text-align: center;
      border-radius: 32px;
      &.fbClass {
        background: #3a5898;
      }
      &.linkedClass {
        background: #2877b5;
      }
      &.twittClass {
        background: #52a7e6;
      }
    }
  }
}
</style>