<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngrToIngr extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ingr_to_ingr', function (Blueprint $table) {
            $table->foreignId('ingredient_from')->constrained('refs_ingredient');
            $table->foreignId('recipe_id')->constrained('recipe');
            $table->json('ingredient_to');
            $table->dateTime('creat_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ingr_to_ingr');
    }
}
