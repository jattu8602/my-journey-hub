<template>
    <section class="header">
        <h1 class="title">GITHUB AWESOME</h1>
        <p class="subtitle">Curated list of awesome GitHub Profile READMEs</p>
        <nav class="navbar">
            <NavItem
                v-for="category in categories"
                :key="category.categoryName"
                :title="category.categoryName"
                :active="selectedCategory === category.categoryName"
                @click="setSelectedCategory(category.categoryName)"
            />
        </nav>
        <Search />
    </section>
</template>

<script>
import NavItem from './NavItem.vue'
import Search from './Search.vue'
import { defineComponent } from 'vue'
import { useStoreInject } from '../hooks/store'

export default defineComponent({
    components: { NavItem, Search },
    setup() {
        const {
            categories,
            loading,
            selectedCategory,
            setSelectedCategory,
        } = useStoreInject()

        return {
            categories,
            loading,
            selectedCategory,
            setSelectedCategory,
        }
    },
})
</script>

<style lang="less" scoped>
.header {
    background-color: #fdfdfd;
    border-bottom: 1px solid #ebebeb;
}
.header .title {
    text-align: center;
    font-size: 32px;
    margin: 0;
    padding: 40px 0 10px;
    color: #333;
}
.header .subtitle {
    text-align: center;
    font-size: 14px;
    color: #888;
    margin: 0 0 30px;
}
.navbar {
    width: 900px;
    margin: 0 auto;
    margin-bottom: 30px;
}

@media screen and (orientation: portrait) and (hover: none) and (pointer: coarse) {
    .header .title {
        font-size: 36px;
    }
}
</style>
