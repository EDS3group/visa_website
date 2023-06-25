<template>
  <div class="profile">
    <div class="dashboard-form mb-4">
      <h3 class="gray mb-5 mt-4 text-center">{{ $t('navs.newTickets') }}</h3>
      <div class="flex justify-content-center">
        <form @submit.prevent class="p-fluid col-md-9 mx-auto">
          <div class="field">
            <div class="relation">
              <label class="form-label" for="relation">
                {{ $t('labels.select topic') }}
              </label>
              <Dropdown
                :loading="false"
                :placeholder="$t('labels.select topic')"
                optionLabel="name"
              ></Dropdown>
            </div>
          </div>
          <div class="field">
            <label for="subject">
              {{ $t('labels.subject') }}
            </label>
            <InputText id="subject" />
          </div>
          <div class="field">
            <label for="message">
              {{ $t('labels.message') }}
            </label>
            <textarea rows="5" cols="30" id="message" />
          </div>

          <Button type="submit" label="Submit" class="mt-4 mainButton" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.profile {
  background: #fff;
  padding: 10px;
  @include mainShadow();
}
.field {
  margin-top: 20px;
}
</style>
