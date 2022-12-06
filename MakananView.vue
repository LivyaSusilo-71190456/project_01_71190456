<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/food1.jpg"> -->
    <HelloWorld msg="Selamat Datang di Aplikasi MacDonal" />
    <HelloWorld msg="Silahkan Pesan Makanan Anda" />
    <table>
      <tr>
        <th>
          <img alt="Vue logo" src="../assets/food1.jpg">
        </th>
        <th>Contact</th>
      </tr>
      <tr>
        <td>
          <button>pedas</button>
          <button>tidak pedas</button>
        </td>
        <td>Maria Anders</td>
      </tr>
      <tr>
        <td>
          <button>+1</button>
        </td>
        <td>Francisco Chang</td>
      </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'MakananView',
  components: {
    HelloWorld
  }
}
</script>
