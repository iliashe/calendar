<template>
<header>
  <div class='select-month'>
    <button type='button'>&larr;</button>
    <select>
      <option>January</option>
    </select>
    <button type='button'>&rarr;</button>
  </div>
  <div class='select-year'>
    <select>
      <option>2022</option>
    </select>
  </div>
</header>
<body>
  <ul class='grid grid-cols-7 gap-5'>
    <li>MON</li>
    <li>TUE</li>
    <li>WED</li>
    <li>THU</li>
    <li>FRI</li>
    <li>SAT</li>
    <li>SUN</li>
  </ul>
  <ul class='grid grid-cols-7 gap-5'> <!-- generate list through a loop -->
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
    <li>28</li>
    <li>29</li>
    <li>30</li>
    <li>31</li>
  </ul>
</body>
</template>

<script>
</script>

<style scoped>
li {
  font-size: x-small;
}
</style>
