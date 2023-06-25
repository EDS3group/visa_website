<template>
  <div class="next-match" v-if="item">
    <ul class="match-teams-vs">
      <li class="team-logo">
        <img
          :src="item.first_team.image"
          :alt="item.first_team[`name_${$i18n.locale}`]"
        />
        <strong>{{ item.first_team[`name_${$i18n.locale}`] }}</strong>
      </li>
      <li class="mvs">
        <p>
          <strong>{{ item.champion_name }}</strong>
          {{ item.date }} - {{ item.time }}
        </p>
        <strong class="vs">{{ $t('VS') }}</strong>
      </li>
      <li class="team-logo">
        <img
          :src="item.second_team.image"
          :alt="item.second_team[`name_${$i18n.locale}`]"
        />
        <strong>{{ item.second_team[`name_${$i18n.locale}`] }}</strong>
      </li>
    </ul>
    <ul class="nmf-loc">
      <li>
        <i class="fas fa-location-arrow"></i>
        {{ item.stadum_name }}
      </li>
      <li>
        <router-link :to="`/services/football-matches/${item.id}`">
          <i class="fas fa-ticket-alt"></i>
          {{ $t('Book Tickets') }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['item'],
}
</script>

<style lang="scss">
.next-match {
  overflow: hidden;
  background: #17233e;
  border-radius: 10px;
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  .match-teams-vs {
    padding: 20px 10px 10px !important;

    display: flex;
    justify-content: space-between;
    .team-logo {
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
      }
      strong {
        font-size: 14px;
        margin-top: 10px;
      }
    }
    .mvs {
      display: flex;
      flex-direction: column;
      text-align: center;
      p {
        margin-bottom: 0;
        strong {
          display: block;
          font-weight: 400;
          text-transform: uppercase;
        }
      }
    }
  }
  .nmf-loc {
    margin-top: auto !important;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-between;
    li {
      padding: 10px;
      font-size: 14px;
      &:first-child {
        border-inline-end: 1px solid rgba(255, 255, 255, 0.2);
      }
      a {
        color: #fff !important;
      }
      transition: 0.3s ease-in-out;
      &:hover {
        background: $main_color;
      }
    }
  }
}
</style>
