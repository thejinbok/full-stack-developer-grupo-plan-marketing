<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreHouseholdApplianceRequest;
use App\Http\Requests\V1\UpdateHouseholdApplianceRequest;
use App\Http\Resources\V1\HouseholdApplianceResource;
use App\Models\HouseholdAppliance;
use Illuminate\Http\Request;

class HouseholdApplianceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return HouseholdApplianceResource::collection(HouseholdAppliance::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHouseholdApplianceRequest $request)
    {
        $householdAppliance = HouseholdAppliance::create($request->validated());

        return new HouseholdApplianceResource($householdAppliance);
    }

    /**
     * Display the specified resource.
     */
    public function show(HouseholdAppliance $householdAppliance)
    {
        return new HouseholdApplianceResource($householdAppliance);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHouseholdApplianceRequest $request, HouseholdAppliance $householdAppliance)
    {
        $householdAppliance->update($request->validated());

        return new HouseholdApplianceResource($householdAppliance);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(HouseholdAppliance $householdAppliance)
    {
        $householdAppliance->delete();

        return response()->noContent();
    }
}
