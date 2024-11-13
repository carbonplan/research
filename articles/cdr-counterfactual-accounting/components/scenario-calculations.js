function calculateNetRemoval(
  alkC,
  alkP,
  rFacC,
  rFacP,
  negRemovalsOnly = false
) {
  const RPROJ = alkP * rFacP
  const RCOUNT = alkC * rFacC

  const R2 = negRemovalsOnly ? Math.max(0, RCOUNT) : RCOUNT
  const RNet = -1 * (RPROJ - R2)

  return {
    R_net: RNet,
    R_PROJ: -1 * RPROJ,
    R_PROJ_counted: -1 * RPROJ,
    R_COUNT: -1 * RCOUNT,
    R_COUNT_counted: -1 * R2,
  }
}

function calculateNetEmissionsA1(alkC, alkP, eFacC, eFacP) {
  const EPROJ = alkP * eFacP
  const ECOUNT = alkC * eFacC
  const ENet = EPROJ - ECOUNT

  return {
    E_net: ENet,
    E_PROJ: EPROJ,
    E_PROJ_counted: EPROJ,
    E_COUNT: ECOUNT,
    E_COUNT_counted: ECOUNT,
  }
}

function calculateNetEmissionsA2(alkC, alkP, eFacC, eFacP) {
  const EPROJ = alkP * eFacP
  const ECOUNT = alkC * eFacC

  const EPROJCounted = EPROJ
  const ECOUNTCounted = EPROJ - ECOUNT < 0 ? EPROJCounted : ECOUNT
  const ENet = EPROJCounted - ECOUNTCounted

  return {
    E_net: ENet,
    E_PROJ: EPROJ,
    E_PROJ_counted: EPROJCounted,
    E_COUNT: ECOUNT,
    E_COUNT_counted: ECOUNTCounted,
  }
}

function calculateNetEmissionsA3(alkC, alkP, eFacC, eFacP) {
  const EPROJ = alkP * eFacP
  const ECOUNT = alkC * eFacC

  return {
    E_net: EPROJ,
    E_PROJ: EPROJ,
    E_PROJ_counted: EPROJ,
    E_COUNT: ECOUNT,
    E_COUNT_counted: 0,
  }
}

function calculateNetEmissionsA4(alkC, alkP, eFacC, eFacP) {
  const EPROJ = alkP * eFacP
  const ECOUNT = alkC * eFacC

  const alkAdditional = Math.max(alkP - alkC, 0)
  const EPROJAdditional = alkAdditional * eFacP
  const EPROJReplacement = EPROJ - EPROJAdditional

  const E2 = Math.max(0, Math.round((EPROJReplacement - ECOUNT) * 100) / 100)

  const EPROJCounted = E2 === 0 ? EPROJReplacement + EPROJAdditional : EPROJ
  const ECOUNTCounted = E2 === 0 ? EPROJReplacement : ECOUNT

  const ENet = EPROJAdditional + E2

  return {
    E_net: ENet,
    E_PROJ: EPROJ,
    E_PROJ_counted: EPROJCounted,
    E_COUNT: ECOUNT,
    E_COUNT_counted: ECOUNTCounted,
  }
}

function calculateNetCDR({
  alkalinityCounterfactual,
  alkalinityProject,
  emissionsFactorCounterfactual = 1,
  emissionsFactorProject = 1,
  removalFactorCounterfactual = 1,
  removalFactorProject = 1,
  ignorePositiveCounterfactual = false,
}) {
  const removals = [
    calculateNetRemoval(
      alkalinityCounterfactual,
      alkalinityProject,
      removalFactorCounterfactual,
      removalFactorProject,
      false
    ),
    calculateNetRemoval(
      alkalinityCounterfactual,
      alkalinityProject,
      removalFactorCounterfactual,
      removalFactorProject,
      true
    ),
    calculateNetRemoval(
      alkalinityCounterfactual,
      alkalinityProject,
      removalFactorCounterfactual,
      removalFactorProject,
      true
    ),
    calculateNetRemoval(
      alkalinityCounterfactual,
      alkalinityProject,
      removalFactorCounterfactual,
      removalFactorProject,
      true
    ),
  ]

  const emissions = [
    calculateNetEmissionsA1(
      alkalinityCounterfactual,
      alkalinityProject,
      emissionsFactorCounterfactual,
      emissionsFactorProject
    ),
    calculateNetEmissionsA2(
      alkalinityCounterfactual,
      alkalinityProject,
      emissionsFactorCounterfactual,
      emissionsFactorProject
    ),
    calculateNetEmissionsA3(
      alkalinityCounterfactual,
      alkalinityProject,
      emissionsFactorCounterfactual,
      emissionsFactorProject
    ),
    calculateNetEmissionsA4(
      alkalinityCounterfactual,
      alkalinityProject,
      emissionsFactorCounterfactual,
      emissionsFactorProject
    ),
  ]

  const counterfactualCheck =
    alkalinityCounterfactual *
    (emissionsFactorCounterfactual - removalFactorCounterfactual)

  let netCDRResults = []

  const approachOrder = [1, 2, 4, 3] // switch 3 and 4

  if (ignorePositiveCounterfactual && counterfactualCheck >= 0) {
    const netCDRValue = removals[0].R_PROJ + emissions[0].E_PROJ

    netCDRResults = approachOrder.map((approach) => ({
      ...emissions[approach - 1],
      ...removals[approach - 1],
      netCDR: netCDRValue,
      netCDR_ae: 0,
      netCDR_Nae: netCDRValue,
      acct_approach: approach,
    }))

    netCDRResults.forEach((result) => {
      result.E_COUNT_counted = 0
      result.R_COUNT_counted = 0
    })
  } else {
    netCDRResults = approachOrder.map((approach) => {
      const netCDR =
        removals[approach - 1].R_net + emissions[approach - 1].E_net

      const netCDRAe =
        -1 * Math.max(0, emissions[3].E_net - emissions[approach - 1].E_net)
      const netCDRNae = netCDR - netCDRAe

      return {
        ...emissions[approach - 1],
        ...removals[approach - 1],
        netCDR: netCDR,
        netCDR_ae: netCDRAe,
        netCDR_Nae: netCDRNae,
        acct_approach: approach,
      }
    })
  }

  return netCDRResults
}

export default calculateNetCDR
