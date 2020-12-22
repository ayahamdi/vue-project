<template>
  <div class="post-box">
    <span class="post-view">{{views}}</span>
    <h3 class="post-title">{{title}}</h3>
    <span class="post-date">{{date}}</span>
    <p class="post-content">{{content}}</p>
    <div class="row">
      <div class="col-sm-6">
        <span class="post-author">{{author}} </span>
      </div>
      <div class="col-sm-6 text-right">
          <span class="post-category">{{category | uppercase}}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.post-box{
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 10px #dddddd;
    position: relative;
    text-align: left;
    margin-bottom: 20px;
    .post-view{
        position: absolute;
        top:5px;
        right: 5px;
        background-color: #4CAF50;
        border-radius: 4px;
        color: #dddddd;
        padding: 1px 5px;
        text-align: center;
        font-weight: 600;
    }
    .post-date{
        display: block;
        padding: 0px 0px 5px;
        color: #888;
        font-size: 14px;
    }
    .post-content{
        line-height: 1.8;
        color: #666;
    }
    .post-author{
        background-color: #607d88;
        padding: 6px 10px;
        border-radius: 4px;
        color: #FFF;
    }
    .post-category{
        background-color: #ff321e;
        padding: 6px 10px;
        border-radius: 4px;
        color: #FFF;
    }

}
</style>
<script>
export default {
  name: "Posts",
  props:["views" , "title" , "date" ,  "content"  , "author" , "category"]
};
</script>
