<template>
    <div>
        <div>
            <title>포트폴리오</title>
            <Meta name="discription" content="프론트앤드 포트폴리오..."/>
            <Link rel="shortuct icon" href="/path/to/favicon.ico"/>
        </div>
        <header>
            <NuxtLink to="/">HOME</NuxtLink>
            <NuxtLink to="/about">ABOUT</NuxtLink>
            <NuxtLink to="/work">WORK</NuxtLink>
        </header>
        <slot/>
        <footer></footer>
    </div>
</template>