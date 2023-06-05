<template>
  <div class="pricingTicket">
    <div class="pricingTicket__header">
      <h4 class="pricingTicket__name">Early Ticket</h4>
      <h5 class="pricingTicket__price">640$</h5>
    </div>
    <div class="pricingTicket__main">
      <ul class="pricingTicket__list">
        <li class="pricingTicket__item">All-Day Coffee + Snacks</li>
        <li class="pricingTicket__item">After Party</li>
        <li class="pricingTicket__item">24/7 Support</li>
      </ul>
      <p class="pricingTicket__desc">Quick group meetings for multiple teams</p>
      <main-btn btnContent="Buy ticket" withBg></main-btn>
    </div>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
.pricingTicket {
  max-width: 415px;
  width: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;

  @media(max-width: 992px) {
    flex-basis: 48%;
  }

  @media(max-width: 992px) {
    max-width: unset;
  }

  &:nth-child(2) {
    margin: 0 20px;

    @media(max-width: 992px) {
      margin: 0;
    }
  }

  &__name {
    margin: 0;
    font-size: 32px;
  }

  &__price {
    margin: 0;
    font-size: 24px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    align-items: center;
    background: #273053;
    border-radius: 20px 20px 0 0;
    color: #fff;
    box-sizing: border-box;
  }

  &__main {
    padding: 30px;
    box-sizing: border-box;
  }

  &__list {
    padding: 0 0 30px;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
    box-sizing: border-box;
  }

  &__item {
    color: #717275;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__desc {
    color: #717275;
    font-size: 18px;
  }
}
</style>